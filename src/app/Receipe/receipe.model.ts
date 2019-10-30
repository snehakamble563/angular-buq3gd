import {} component } from '@angular/core';

@Component({

})

export class receipemodel{

public name :string;
public description : string;
public Imagepath :string;

constructor(name:string,desc :string,Imagepath:string)
{
  this.name=name;
  this.description=desc;
  this.Imagepath=Imagepath;

}
}