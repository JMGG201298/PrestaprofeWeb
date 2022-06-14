<?php

namespace App\Console\Commands;

use App\Models\Loan;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use App\Mail\Prueba;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ExpiredLoan extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'Loan:expired';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Notifica que ha expirado un prestamo';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public $lista;
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
        
    }
}
