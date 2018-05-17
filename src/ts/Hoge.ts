namespace HK
{
    export class Hoge
    {
        private value: number;

        constructor(value: number)
        {
            this.value = value;
        }

        public output(): void
        {
            console.log("Hoge is " + this.value);
        }
    }
}