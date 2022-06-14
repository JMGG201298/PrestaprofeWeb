<?php

namespace App\Services;

use App\Repositories\RoleRepository;
use Illuminate\Support\Facades\Validator;

class RoleService {

    protected $roleRepository;

    public function __construct(RoleRepository $roleRepository)
    {
        $this->roleRepository = $roleRepository;
    }

    public function getAll()
    {
        return $this->roleRepository->getAll();
    }

    public function getOne($role)
    {
        return $this->roleRepository->getOne($role);
    }

    public function create($data)
    {
        $rules = [
            'name' => 'required|string|max:255',
            'guard_name' => 'required|string|max:255'
        ];

        $validator= Validator::make($data, $rules);

        if($validator->fails()){
            return response($validator->errors(),422);
        }
        else{
            return $this->roleRepository->create($data);
        }
    }

    public function update($data, $role)
    {
        $rules = [
            'name' => 'string|max:255',
            'guard_name' => 'string|max:255'
        ];

        $validator= Validator::make($data, $rules);

        if($validator->fails()){
            return response($validator->errors(),422);
        }
        else{
            if ($this->roleRepository->update($data, $role)) {
                return $role;
            }
            else{

            }
        }
    }

    public function delete($role)
    {
        return $this->roleRepository->delete($role);
    }
}
