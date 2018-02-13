class ElectionAppsController < ApplicationController
  include ApplicationHelper
  def index
    @apps_categories = election_apps_categories
  end

  def new
    @election_app = ElectionApps::App.new()
  end

  def create
    @election_app = ElectionApps::App.new(election_app_params)
    if (@election_app.save)
      ElectionAppsMailer.new_app_registered(
        @election_app,
        rails_admin.show_url(model_name: 'election_apps~app', id: @election_app.id),
        user_details
      ).deliver
      redirect_to new_election_app_path, notice: t('.success')
    else
      render :new
    end
  end

  private

  def election_apps_categories
    ElectionApps::CategoryReactDecorator.decorate(ElectionApps::Category.includes(:apps))
  end

  def election_app_params
    params.require(:election_apps_app).permit(
      :name,
      :description,
      :screenshot,
      :category_id,
      :logo,
      :link )
  end
end
