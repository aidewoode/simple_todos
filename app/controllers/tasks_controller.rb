class TasksController < ApplicationController
  before_action :authenticate

  def index
    @tasks = current_user.tasks.all
  end

  def create
    @task = current_user.tasks.build(task_params)
    if @task.save
      render 'show'
    else
      head :forbidden
    end
  end

  def destroy
    task = Task.find(params[:id])
    return head :forbidden unless task

    if task.user == current_user
      task.destroy
      head :ok
    else
      head :unauthorized
    end
  end

  def check
    task = Task.find(params[:id])
    return head :forbidden unless task

    if task.user == current_user
      task.toggle(:checked)
      task.save
      head :ok
    else
      head :unauthorized
    end
  end

  private

  def task_params
    params.require(:task).permit(:body)
  end

  def authenticate
    render head :unauthorized unless auth?
  end
end
