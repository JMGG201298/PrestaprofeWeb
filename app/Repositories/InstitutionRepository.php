<?php

namespace App\Repositories;

use App\Models\Institution;

class InstitutionRepository {

    protected $institution;

    public function __construct(Institution $institution)
    {
        $this->institution = $institution;
    }

    /**
     * Retorna todas las instituciones
     * @return collection $institution
     */
    public function getAll()
    {
        return $this->institution::all();
    }

    /**
     * Retorna una institución
     * @param $institution
     * @return $institution
     */
    public function getOne($institution)
    {
        return $institution;
    }

    /**
     * Agrega y retorna una institución
     * @param Array $institution
     * @return Institution
     */
    public function create($institution)
    {
        return $this->institution::create($institution);
    }

    /**
     * Actualiza y retorna una institución
     * @param Array $data
     * @param Institution $institution
     * @return bool
     */
    public function update($data, $institution)
    {
        return $institution::update($data);
    }

    /**
     * Elimina y retorna una institución
     * @param Institution $user
     * @return Institution $user
     */
    public function delete($institution)
    {
        return $institution->delete();
    }

}
