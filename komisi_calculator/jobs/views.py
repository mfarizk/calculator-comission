from django.shortcuts import render
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.db.models import Count, Sum
from .models import Job, Employee
# Create your views here.

@csrf_exempt
def create_job(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            print(data)
            print(type(data['gross_profit']))
            employee_id = data['employee']
            period_job = data['period_job']
            amount = int(data['amount'])
            gross_profit = float(data['gross_profit'])

            employee = get_object_or_404(Employee, id=employee_id)

            job = Job(
                employee=employee,
                period_job=period_job,
                amount=amount,
                gross_profit=gross_profit
            )
            job.save()

            response_data = {
                'id': job.id,
                'employee': job.employee.name,
                'period_job': job.period_job,
                'amount': job.amount,
                'gross_profit': job.gross_profit,
                'commission': job.commission
            }
            return JsonResponse(response_data, status=201)

        except (KeyError, ValueError) as e:
            return JsonResponse({'error': str(e)}, status=400)

def dashboard(request):
    if request.method == 'GET':
        employee_jobs = Job.objects.values('employee__name').annotate(total_amount=Sum('amount')).order_by('-total_amount')
        gross_profit_data = Job.objects.extra(select={'month': "strftime('%%Y-%%m', period_job)"}).values('month').annotate(total_gross_profit=Sum('gross_profit')).order_by('month')

        data = {
            'employee_jobs': list(employee_jobs),
            'gross_profit_data': list(gross_profit_data)
        }

        return JsonResponse(data, status=200, safe=False)

def get_employees(request):
    if request.method == 'GET':
        employees = Employee.objects.all()
        employees_list = [{'id': emp.id, 'name': emp.name} for emp in employees]
        return JsonResponse(employees_list, status=200, safe=False)