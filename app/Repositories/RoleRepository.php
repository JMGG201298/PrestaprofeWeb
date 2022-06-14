<?php

namespace App\Repositories;

use App\Models\Role;
use Illuminate\Http\Request;

class RoleRepository {

    protected $role;

    public function __construct(Role $role)
    {
        $this->role = $role;
    }

    /**
     * Retorna todos los roles
     * @return collection $role
     */
    public function getAll()
    {
        return $this->role::select('name')->get();
    }

    /**
     * Retorna un role
     * @param $role
     * @return $role
     */
    public function getOne($role)
    {
        return $role;
    }

    /**
     * Agrega y retorna un role
     * @param Array $role
     * @return Role
     */
    public function create($role)
    {
        // SpatieRole::create(['name' => $role['name']]);
        return $this->role::create($role);
    }

    /**
     * Actualiza y retorna un role
     * @param Array $data
     * @param Role $role
     * @return bool
     */
    public function update($data, $role)
    {
        return $role->update($data);
    }

    /**
     * Elimina y retorna un role
     * @param Role $role
     * @return Role $role
     */
    public function delete($role)
    {
        return $role->delete();
    }
}
