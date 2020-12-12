new Vue({
    el: '#app',
    data: {
        fizzBuzzIsRuning: false,
        valueFizzBuzz: '',
        numberFizzBuzz: '',
        printValues: [],
        show: true,
        isFizzBuzz: false,
        isFizz: false,
        isBuzz: false,
        isNone: false
    },
    methods: {
        startFizzBuzz: function () {
            this.fizzBuzzIsRuning = true;
            this.printValues = [];
        },
        runFizzBuzz: function () {
            var val;
            for (val = 1; val < 101; val++){
                this.valueFizzBuzz='';
                if (val % 15 == 0){
                    this.valueFizzBuzz = 'FizzBuzz';
                    this.isFizzBuzz = true;
                    this.isFizz= false;
                    this.isBuzz= false
                    this.isNone = false;
                }else if (val % 5 == 0){
                    this.valueFizzBuzz = 'Buzz';
                    this.isBuzz = true;
                    this.isFizzBuzz = false;
                    this.isFizz= false;
                    this.isNone = false;
                }else if(val % 3 == 0) {
                    this.valueFizzBuzz = 'Fizz';
                    this.isFizz = true;
                    this.isBuzz= false;
                    this.isFizzBuzz = false;
                    this.isNone = false;
                }else{
                    this.valueFizzBuzz = ''
                    this.isNone = true;
                    this.isFizz = false;
                    this.isBuzz= false;
                    this.isFizzBuzz = false;
                }
                this.printValues.push({
                    isFizzBuzz: this.isFizzBuzz,
                    isFizz: this.isFizz,
                    isBuzz: this.isBuzz,
                    isNone: this.isNone,
                    numberFizzBuzz: val,
                    text: this.valueFizzBuzz
                })
            }
            this.show = false;
        },
        resetFizzBuzz: function () {
            this.fizzBuzzIsRuning = false;
            this.show = true;
        }
    }
});