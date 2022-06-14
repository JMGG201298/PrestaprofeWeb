<?php

namespace App\Jobs;

use App\Mail\Prueba;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use App\Services\NotificationService;
use App\Events\NotificationNextPay;
use App\Events\prueba as EventsPrueba;

class JobDaily implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $id;
    public $diff;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($id, $diff)
    {
        $this->id=$id;
        $this->diff=$diff;
        Log::alert('Desde job Daily: '.$id);
        event(new NotificationNextPay($this->id, $this->diff));
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        
    }
}
