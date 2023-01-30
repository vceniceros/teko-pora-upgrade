export class Projects {
  public id: number;
  public title: string;
  public subtitle: string;
  public descrip: string;
  public img: string;
  public img1: string;
  public img2: string;
  public img3: string;
  public img4: string;
  public img5: string;
  public img6: string;

  constructor(
    id: number,
    title: string,
    subtitle: string,
    descrip: string,
    img: string,
    img1: string,
    img2: string,
    img3: string,
    img4: string,
    img5: string,
    img6: string,
  ){
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.descrip= descrip;
    this.img = img;
    this.img1 = img1;
    this.img2 = img2;
    this.img3 = img3;
    this.img4 = img4;
    this.img5 = img5;
    this.img6 = img6;
  };
}
