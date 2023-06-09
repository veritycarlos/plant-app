class PlantsController < ApplicationController

    def index
        plants = Plant.all
        render json: plants, include: :tips
    end 

    def create
        plant = Plant.create!(plant_params)
        render json: plant, status: :created 
    end 

    def show
        plant = Plant.find_by(id: params[:id])
        if plant
            render json: plant, include: :tips
        else
            render json: { error: "Plant not found" }, status: :unauthorized
        end
    end 

    def destroy
        plant = Plant.find_by(id: params[:id])
        if plant
            plant.destroy
            head :no_content
        else
            render json: { error: "Plant not found" }, status: :not_found
        end
    end 

    def update
        plant = Plant.find_by(id: params[:id])
        plant.update(plant_params)
        render json: plant
    end

    private

    def plant_params
        params.permit(:name, :image)
    end

end