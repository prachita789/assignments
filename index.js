class Automobile{
    constructor(b,p,s,se,m){
        this.brand = b;
        this.price = p;
        this.speed = s;
        this.seats = se;
        this.model = m;

    }

    
}
let a1 = new Automobile("Honda","Rs.10Lac","170km/hr","5","Honda city");
    console.log(a1);

    class Cars extends Automobile{
        constructor(b,p,s,se,m,sn,bk,re,bl){
            super(b,p,s,se,m);
            this.sunroof = sn;
            this.backupcamera = bk;
            this.remotestart = re;
            this.bluetooth = bl;

        }
    }
    let a2 = new Cars("Lamborghini","Rs.3 Cr","329km/hr","5","Urus","NA","Yes","Yes","Yes")
    console.log(a2);

    class NewCars extends Cars{
        constructor(b,p,s,se,m,sn,bk,re,bl,d,a)
        {
            super(b,p,s,se,m,sn,bk,re,bl);
            this.display = d;
            this.autopilot = a;
        }
    }

    let a3 = new NewCars("Tesla","Rs.70Lac","163Km/H","7","Tesla Model Y","Yes","Yes","Yes","Yes","Yes","Yes")

    console.log(a3);