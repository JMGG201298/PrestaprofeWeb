<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class NotificationExpiredPayment implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $id, $dias, $mensaje, $titulo;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($id, $diff)
    {
        $this->id=$id;
        $this->dias=$diff;
        $this->titulo="¡Tienes pagos vencidos!";
        $this->mensaje="Al parecer tienes pagos vencidos, pagalos y evita pagar de más";
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
