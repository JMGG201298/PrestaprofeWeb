<?php

namespace App\Console\Commands;

use App\Jobs\JobDaily;
use App\Jobs\JobExpiredPayment;
use App\Jobs\JobTodayPay;
use App\Models\Payment;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use App\Mail\Prueba;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class DailyLoans extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'Loans:daily';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Obtiene los pagos de el dia actual';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        //Obtiene los pagos que tenga van a expirar dentro de 8 dias
        $payments=Payment::selectRaw('*,timestampdiff(DAY,curdate(),expired_date) as diff')
        ->WhereRaw('timestampdiff(DAY,curdate(),expired_date) < 8')->where('status','=','Pagado')
        ->whereRaw('timestampdiff(DAY,curdate(),expired_date) > 0')
        ->get();
        foreach ($payments as $payment) {
            dispatch(new JobDaily($payment->id, $payment->diff))->delay(15);
        }

        //Obtiene los pagos que se vencen el dia de hoy
        $payments_vencen=$payments=Payment::selectRaw('*,timestampdiff(DAY,curdate(),expired_date) as diff')
        ->WhereRaw('timestampdiff(DAY,curdate(),expired_date) = 0')
        ->get();
        foreach($payments_vencen as $payment){
            dispatch(new JobTodayPay($payment->id, $payment->diff))->delay(15);
        }
        
        //Obtiene los pagos que estan atrasados
        $payments_atrasados=$payments=Payment::selectRaw('*,timestampdiff(DAY,curdate(),expired_date) as diff')
        ->WhereRaw('timestampdiff(DAY,curdate(),expired_date) < 0')->where('status','Atrasado')
        ->get();
        foreach($payments_atrasados as $payment){
            dispatch(new JobExpiredPayment($payment->id, $payment->diff))->delay(15);
        }
    }
}
