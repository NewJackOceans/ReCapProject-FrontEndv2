import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
cars:Car[]=[];
brands:Brand[]=[];
dataLoaded =false;
filterText="";

  constructor(private carService:CarService, private activetedRoute:ActivatedRoute, private toastrService:ToastrService, private cartService:CartService) { }

  ngOnInit(): void {
    this.getCars();
    this.activetedRoute.params.subscribe(params=>{
      if(params["brandId"]){
this.getCarsByBrand(params["brandId"])
      }else if(params["colorId"]){
this.getCarsByColor(params["colorId"])
      }else{
        this.getCars()
      }
    })
  }
  getCars(){
    this.carService.getCars().subscribe(response =>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }
  
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response =>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }
  getCarsByColor(colorId:number){
    this.carService.getCarsByBrand(colorId).subscribe(response =>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

  addToCart(car:Car){
    this.toastrService.success(" Selected for rental.", car.carName);
    //this.cartService.addToCart(car);

  }
  

}
