let btn = document.getElementById('button');
let output = document.getElementById('output');
let quotes = [
        '<i class="fas fa-quote-left"></i>Love For All, Hatred For None. – Khalifatul Masih III<i class="fas fa-quote-right"></i>',
        '<i class="fas fa-quote-left"></i>Change the world by being yourself. – Amy Poehler<i class="fas fa-quote-right"></i>',
        '<i class="fas fa-quote-left"></i>Every moment is a fresh beginning. – T.S Eliot<i class="fas fa-quote-right">',
        '<i class="fas fa-quote-left"></i>Never regret anything that made you smile. – Mark Twain<i class="fas fa-quote-right"></i>',
        '<i class="fas fa-quote-left"></i>Die with memories, not dreams. – Unknown<i class="fas fa-quote-right"></i>',
        '<i class="fas fa-quote-left"></i>Aspire to inspire before we expire. – Unknown<i class="fas fa-quote-right"></i>',
        '<i class="fas fa-quote-left"></i>Everything you can imagine is real. – Pablo Picasso<i class="fas fa-quote-right"></i>',
        '<i class="fas fa-quote-left"></i>Simplicity is the ultimate sophistication. – Leonardo da Vinci<i class="fas fa-quote-right"></i>',
        '<i class="fas fa-quote-left"></i>Whatever you do, do it well. – Walt Disney<i class="fas fa-quote-right"></i>',
        '<i class="fas fa-quote-left"></i>What we think, we become. – Buddha<i class="fas fa-quote-right"></i>',
        '<i class="fas fa-quote-left"></i>All limitations are self-imposed. – Oliver Wendell Holmes<i class="fas fa-quote-right"></i>',
        '<i class="fas fa-quote-left"></i>Tough times never last but tough people do. – Robert H. Schiuller<i class="fas fa-quote-right"></i>',
        '<i class="fas fa-quote-left"></i>Problems are not stop signs, they are guidelines. – Robert H. Schiuller<i class="fas fa-quote-right"></i>',
        '<i class="fas fa-quote-left"></i>One day the people that don’t even believe in you will tell everyone how they met you. – Johnny Depp<i class="fas fa-quote-right"></i>',
        '<i class="fas fa-quote-left"></i>If you tell the truth you don’t have to remember anything. – Mark Twain<i class="fas fa-quote-right"></i>',
        '<i class="fas fa-quote-left"></i>Hate comes from intimidation, love comes from appreciation. – Tyga<i class="fas fa-quote-right"></i>',
        '<i class="fas fa-quote-left"></i>I could agree with you but then we’d both be wrong. – Harvey Specter<i class="fas fa-quote-right"></i>',
        '<i class="fas fa-quote-left"></i>Oh, the things you can find, if you don’t stay behind. – Dr. Seuss<i class="fas fa-quote-right"></i>',

        ]

        btn.addEventListener('click',function(){
            var random = quotes[Math.floor(Math.random()*quotes.length)]
            output.innerHTML = random
        })