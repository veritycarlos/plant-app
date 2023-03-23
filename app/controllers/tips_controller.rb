class TipsController < ApplicationController

    def index
        if params[:plant_id]
            plant = Plant.find(params[:plant_id])
            tips = plant.tips
        else
            tips = Tip.all
        end
        render json: tips, include: :plant
    end 
    
    def show
        if params[:plant_id]
            plant = Plant.find(params[:plant_id])
            tips = plant.tips
        else
            tips = Tip.all
        end
        render json: tips, include: :plant
    end 

    def create
        tip = Tip.create(tip_params)
        render json: tip.plant, status: :created
    end

    private

    def tip_params
        params.permit(:user_id, :plant_id, :timestamps)
    end
    
    # def index
    #     if params[:plant_id]
    #         plant = Plant.find(params[:plant_id])
    #         tips = plant.tips
    #     else
    #         tips = Tip.all
    #     end
    #     render json: tips, include: :plant
    # end 

    #i think this is correct
    # def show
    #     if params[:plant_id]
    #         plant = Plant.find(params[:plant_id])
    #         tips = plant.tips
    #     else
    #         tips = Tip.all
    #     end
    #     render json: tips, include: :plant
    # end 

end
