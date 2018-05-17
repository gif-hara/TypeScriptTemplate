namespace HK
{
    export class HelloWorld
    {
        private message: string;
    
        constructor(message: string)
        {
            this.message = message;
        }
    
        public output(): void
        {
            console.log("Test Hello world " + this.message);
        }

        public static staticFunction(): void
        {
            console.log("This function is public static");
        }
    }
}
