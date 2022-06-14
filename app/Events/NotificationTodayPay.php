<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class NotificationTodayPay implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $id;
    public $dias;
    public $titulo;
    public $mensaje;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($id, $diff)
    {
        $this->id = $id;
        $this->titulo="¡La fecha limite de pago es hoy!";
        $this->mensaje="No olvides realizar tu pago hoy, evita generar intereses";
        $this->dias = $diff;
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
