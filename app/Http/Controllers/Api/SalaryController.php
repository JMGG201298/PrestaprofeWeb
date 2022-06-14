<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Salary;
use App\Services\SalaryService;
use Illuminate\Http\Request;

class SalaryController extends Controller
{
    protected $salaryService;

    public function __construct(SalaryService $salaryService)
    {
        $this->salaryService = $salaryService;
    }

    public function index()
    {
        return $this->salaryService->getAll();
    }
    public function show(Salary $salary)
    {
        return $this->salaryService->getOne($salary);
    }
    public function store(Request $request)
    {
        return $this->salaryService->create($request->all());
    }
    public function update(Request $request, Salary $salary)
    {
        return $this->salaryService->update($request->all(), $salary);
    }
    public function destroy(Salary $salary)
    {
        return $this->salaryService->delete($salary);
    }
}
