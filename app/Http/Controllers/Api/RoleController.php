<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Services\RoleService;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    protected $roleService;

    public function __construct(RoleService $roleService)
    {
       $this->roleService = $roleService;
    }

    public function index()
    {
        return $this->roleService->getAll();
    }
    public function show(Role $role)
    {
        return $this->roleService->getOne($role);
    }
    public function store(Request $request)
    {
        return $this->roleService->create($request->all());
    }
    public function update(Request $request, Role $role)
    {
        return $this->roleService->update($request->all(), $role);
    }
    public function destroy(Role $role)
    {
        return $this->roleService->delete($role);
    }
}
