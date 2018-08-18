export class Wine {
    id: number;
    country: string;
    description: string;
    designation: string;
    points: number;
    price: number;
    province: string;
    region_1: string;
    region_2: string;
    variety: string;
    winery: string;
    constructor(id: number,
        country: string,
        description: string,
        designation: string,
        points: number,
        price: number,
        province: string,
        region_1: string,
        region_2: string,
        variety: string,
        winery: string) {
        this.id = id;
        this.country = country;
        this.description = description;
        this.designation = designation;
        this.points = points;
        this.price = price;
        this.province = province;
        this.region_1 = region_1;
        this.region_2 = region_2;
        this.variety = variety;
        this.winery = winery;
    }
}
