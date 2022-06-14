<?php

namespace App\Repositories;

use App\Models\Salary;

class SalaryRepository {

    protected $salary;

    public function __construct(Salary $salary)
    {
        $this->salary = $salary;
    }

    /**
     * Retorna todos los salarios
     * @return collection $salary
     */
    public function getAll()
    {
        return $this->salary::all();
    }

    /**
     * Retorna un salario
     * @param $user
     * @return $user
     */
    public function getOne($salary)
    {
        return $salary;
    }

    /**
     * Agrega y retorna un salario
     * @param Array $salary
     * @return Salary
     */
    public function create($salary)
    {
        return $this->salary::create($salary);
    }

    /**
     * Actualiza y retorna un salario
     * @param Array $data
     * @param Salary $salary
     * @return bool
     */
    public function update($data, $salary)
    {
        return $salary::update($data);
    }

    /**
     * Elimina y retorna un salario
     * @param Salary $salary
     * @return Salary $salary
     */
    public function delete($salary)
    {
        return $salary->delete();
    }

}
