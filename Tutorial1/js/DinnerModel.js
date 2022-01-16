class DinnerModel{

    constructor(guests = 2){

        this.setNumberOfGuests(guests);
    }

    setNumberOfGuests(x){

        if ((x < 1) || !Number.isInteger(x)) throw new Error("InvalidArgumentExcpetion - Cannot be lower than 1 or other than an integer");

        this.numberOfGuests = x;
    } 
}
