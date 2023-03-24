class TipsController < ApplicationController
    wrap_parameters format: []

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
        tip = current_user.tips.create!(tip_params)
        render json: tip, status: :created
    end


    private

    def tip_params
        params.permit(:title, :comment, :plant_id, :user_id)
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