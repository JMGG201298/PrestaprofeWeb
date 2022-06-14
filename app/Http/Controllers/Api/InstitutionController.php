<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Institution;
use App\Services\InstitutionService;
use Illuminate\Http\Request;

class InstitutionController extends Controller
{
    protected $institutionService;

    public function __construct(InstitutionService $institutionService)
    {
        $this->institutionService = $institutionService;
    }

    public function index()
    {
        return $this->institutionService->getAll();
    }

    public function show(Institution $institution)
    {
        return $this->institutionService->getOne($institution);
    }

    public function store(Request $request)
    {
        return $this->institutionService->create($request->all());
    }

    public function update(Request $request, Institution $user)
    {
        return $this->institutionService->update($request->all(), $user);
    }

    public function destroy(Institution $institution)
    {
        return $this->institutionService->delete($institution);
    }

    public function importInstitutions(Request $request)
    {
        $file = $request['file'];
        return $this->institutionService->importInstitutions($file);
    }
}
