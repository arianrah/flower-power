class PlantsController < ApplicationController
  def create
    @plant = Plant.new(plant_params)
    
    # store all emails in lowercase to avoid duplicates and case-sensitive login errors:
    @plant.name.downcase!
    
    if @plant.save
      # If user saves in the db successfully:
      flash[:notice] = "Plant created successfully!"
      redirect_to root_path
    else
      # If user fails model validation - probably a bad password or duplicate email:
      flash.now.alert = "Oops, couldn't create plant. Please make sure you are using a valid name."
      render :new
    end
  end
  private

  def plant_params
    # strong parameters - whitelist of allowed fields #=> permit(:name, :email, ...)
    # that can be submitted by a form to the user model #=> require(:user)
    params.require(:plant).permit(:name, :image)
  end
end
