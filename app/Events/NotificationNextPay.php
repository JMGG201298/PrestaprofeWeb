<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class NotificationNextPay implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $id;
    public $mensaje;
    public $dias;
    public $titulo;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($id, $diff)
    {
        $this->id = $id;
        $this->dias=$diff;
        $this->titulo="La fecha de pago esta próxima a vencer";
        $this->mensaje="Faltan ".$this->dias." días para que el próximo pago se venza";
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('DailyLoanChannel.'.$this->id);
    }
}
