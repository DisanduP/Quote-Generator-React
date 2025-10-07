import React, { useState, useEffect } from 'react';
import '../styles/QuoteGenerator.scss';

// Local quotes array instead of API
const quotes = [
  {
    content: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    content: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon"
  },
  {
    content: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    content: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
  },
  {
    content: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  },
  {
    content: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr."
  },
  {
    content: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    content: "The only way to achieve the impossible is to believe it is possible.",
    author: "Charles Kingsleigh"
  },
  {
    content: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    content: "Whether you think you can or you think you can't, you're right.",
    author: "Henry Ford"
  },
  {
    content: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    content: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein"
  },
  {
    content: "So many books, so little time.",
    author: "Frank Zappa"
  },
  {
    content: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero"
  },
  {
    content: "You only live once, but if you do it right, once is enough.",
    author: "Mae West"
  },
  {
    content: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    content: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    author: "J.K. Rowling"
  },
  {
    content: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain"
  },
  {
    content: "Friendship is born at that moment when one person says to another: What! You too? I thought I was the only one.",
    author: "C.S. Lewis"
  },
  {
    content: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison"
  },
  {
    content: "A woman is like a tea bag; you never know how strong it is until it's in hot water.",
    author: "Eleanor Roosevelt"
  },
  {
    content: "A day without sunshine is like, you know, night.",
    author: "Steve Martin"
  },
  {
    content: "The opposite of love is not hate, it's indifference.",
    author: "Elie Wiesel"
  },
  {
    content: "It is better to be hated for what you are than to be loved for what you are not.",
    author: "André Gide"
  },
  {
    content: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
    author: "Mark Twain"
  },
  {
    content: "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right.",
    author: "Marilyn Monroe"
  },
  {
    content: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
    author: "Bill Keane"
  },
  {
    content: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    content: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair"
  },
  {
    content: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    content: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson"
  },
  {
    content: "Go confidently in the direction of your dreams. Live the life you have imagined.",
    author: "Henry David Thoreau"
  },
  {
    content: "When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down 'happy'. They told me I didn't understand the assignment, and I told them they didn't understand life.",
    author: "John Lennon"
  },
  {
    content: "Fall seven times and stand up eight.",
    author: "Japanese Proverb"
  },
  {
    content: "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
    author: "Helen Keller"
  },
  {
    content: "Everything has beauty, but not everyone can see.",
    author: "Confucius"
  },
  {
    content: "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    author: "Anne Frank"
  },
  {
    content: "When I let go of what I am, I become what I might be.",
    author: "Lao Tzu"
  },
  {
    content: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    author: "Maya Angelou"
  },
  {
    content: "Happiness is not something readymade. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    content: "If you're offered a seat on a rocket ship, don't ask what seat! Just get on.",
    author: "Sheryl Sandberg"
  },
  {
    content: "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
    author: "Aristotle"
  },
  {
    content: "If the wind will not serve, take to the oars.",
    author: "Latin Proverb"
  },
  {
    content: "You can't fall if you don't climb. But there's no joy in living your whole life on the ground.",
    author: "Unknown"
  },
  {
    content: "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
    author: "Marie Curie"
  },
  {
    content: "Too many of us are not living our dreams because we are living our fears.",
    author: "Les Brown"
  },
  {
    content: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    author: "Joshua J. Marine"
  },
  {
    content: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington"
  },
  {
    content: "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
    author: "Leonardo da Vinci"
  },
  {
    content: "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.",
    author: "Jamie Paolinetti"
  },
  {
    content: "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
    author: "Erica Jong"
  },
  {
    content: "What's money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
    author: "Bob Dylan"
  },
  {
    content: "I didn't fail the test. I just found 100 ways to do it wrong.",
    author: "Benjamin Franklin"
  },
  {
    content: "In order to succeed, your desire for success should be greater than your fear of failure.",
    author: "Bill Cosby"
  },
  {
    content: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein"
  },
  {
    content: "The person who says it cannot be done should not interrupt the person who is doing it.",
    author: "Chinese Proverb"
  },
  {
    content: "There are no traffic jams along the extra mile.",
    author: "Roger Staubach"
  },
  {
    content: "It is never too late to be what you might have been.",
    author: "George Eliot"
  },
  {
    content: "You become what you believe.",
    author: "Oprah Winfrey"
  },
  {
    content: "I would rather die of passion than of boredom.",
    author: "Vincent van Gogh"
  },
  {
    content: "A truly rich man is one whose children run into his arms when his hands are empty.",
    author: "Unknown"
  },
  {
    content: "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
    author: "Ann Landers"
  },
  {
    content: "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
    author: "Abigail Van Buren"
  },
  {
    content: "Build your own dreams, or someone else will hire you to build theirs.",
    author: "Farrah Gray"
  },
  {
    content: "The battles that count aren't the ones for gold medals. The struggles within yourself—the invisible battles inside all of us—that's where it's at.",
    author: "Jesse Owens"
  },
  {
    content: "Education costs money. But then so does ignorance.",
    author: "Sir Claus Moser"
  },
  {
    content: "I have learned throughout my life as a composer chiefly through my mistakes and pursuits of false assumptions, not by my exposure to founts of wisdom and knowledge.",
    author: "Igor Stravinsky"
  },
  {
    content: "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.",
    author: "Jim Rohn"
  },
  {
    content: "Try not to become a person of success, but rather try to become a person of value.",
    author: "Albert Einstein"
  },
  {
    content: "A lot of people are afraid to say what they want. That's why they don't get what they want.",
    author: "Madonna"
  },
  {
    content: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    author: "Ayn Rand"
  },
  {
    content: "Some people want it to happen, some wish it would happen, others make it happen.",
    author: "Michael Jordan"
  },
  {
    content: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    author: "Eleanor Roosevelt"
  },
  {
    content: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    author: "Jimmy Dean"
  },
  {
    content: "If you genuinely want something, don't wait for it—teach yourself to be impatient.",
    author: "Gurbaksh Chahal"
  },
  {
    content: "The truth will set you free, but first it will piss you off.",
    author: "Gloria Steinem"
  },
  {
    content: "Champions keep playing until they get it right.",
    author: "Billie Jean King"
  },
  {
    content: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    content: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    author: "Winston Churchill"
  },
  {
    content: "Don't let yesterday take up too much of today.",
    author: "Will Rogers"
  },
  {
    content: "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
    author: "Unknown"
  },
  {
    content: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
    author: "Steve Jobs"
  },
  {
    content: "People who are unable to motivate themselves must be content with mediocrity, no matter how impressive their other talents.",
    author: "Andrew Carnegie"
  },
  {
    content: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs"
  },
  {
    content: "Entrepreneur is someone who has a vision for something and a want to create.",
    author: "David Karp"
  },
  {
    content: "I knew that if I failed I wouldn't regret that, but I knew the one thing I might regret is not trying.",
    author: "Jeff Bezos"
  },
  {
    content: "All our dreams can come true if we have the courage to pursue them.",
    author: "Walt Disney"
  },
  {
    content: "The question isn't who is going to let me; it's who is going to stop me.",
    author: "Ayn Rand"
  },
  {
    content: "The entrepreneur always searches for change, responds to it, and exploits it as an opportunity.",
    author: "Peter Drucker"
  },
  {
    content: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
    author: "David Brinkley"
  },
  {
    content: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt"
  },
  {
    content: "The whole secret of a successful life is to find out what is one's destiny to do, and then do it.",
    author: "Henry Ford"
  },
  {
    content: "If you're going through hell keep going.",
    author: "Winston Churchill"
  },
  {
    content: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson"
  },
  {
    content: "You have been assigned this mountain to show others it can be moved.",
    author: "Mel Robbins"
  },
  {
    content: "Your limitation—it's only your imagination.",
    author: "Unknown"
  },
  {
    content: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown"
  },
  {
    content: "Great things never come from comfort zones.",
    author: "Unknown"
  },
  {
    content: "Dream it. Wish it. Do it.",
    author: "Unknown"
  },
  {
    content: "Success doesn't just find you. You have to go out and get it.",
    author: "Unknown"
  },
  {
    content: "The harder you work for something, the greater you'll feel when you achieve it.",
    author: "Unknown"
  },
  {
    content: "Dream bigger. Do bigger.",
    author: "Unknown"
  },
  {
    content: "Don't stop when you're tired. Stop when you're done.",
    author: "James Bond"
  },
  {
    content: "Wake up with determination. Go to bed with satisfaction.",
    author: "Unknown"
  },
  {
    content: "Do something today that your future self will thank you for.",
    author: "Sean Patrick Flanery"
  },
  {
    content: "Little things make big days.",
    author: "Unknown"
  },
  {
    content: "It's going to be hard, but hard does not mean impossible.",
    author: "Unknown"
  },
  {
    content: "Don't wait for opportunity. Create it.",
    author: "Unknown"
  },
  {
    content: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb"
  },
  {
    content: "Your only limit is your mind.",
    author: "Unknown"
  },
  {
    content: "Sometimes we're tested not to show our weaknesses, but to discover our strengths.",
    author: "Unknown"
  },
  {
    content: "The key to success is to focus on goals, not obstacles.",
    author: "Unknown"
  },
  {
    content: "Dream it. Believe it. Build it.",
    author: "Unknown"
  },
  {
    content: "The difference between ordinary and extraordinary is that little extra.",
    author: "Jimmy Johnson"
  },
  {
    content: "Success is the sum of small efforts repeated day in and day out.",
    author: "Robert Collier"
  },
  {
    content: "Don't be afraid to give yourself everything you've ever wanted in life.",
    author: "Unknown"
  },
  {
    content: "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon"
  },
  {
    content: "Your potential is endless.",
    author: "Unknown"
  },
  {
    content: "The pain you feel today is the strength you feel tomorrow.",
    author: "Unknown"
  },
  {
    content: "Make it happen.",
    author: "Unknown"
  },
  {
    content: "You don't have to be great to get started, but you have to get started to be great.",
    author: "Les Brown"
  },
  {
    content: "A champion is defined not by their wins but by how they can recover when they fall.",
    author: "Serena Williams"
  },
  {
    content: "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart"
  },
  {
    content: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky"
  },
  {
    content: "Whether you think you can or you think you can't, you're right.",
    author: "Henry Ford"
  },
  {
    content: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison"
  },
  {
    content: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein"
  },
  {
    content: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    content: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon"
  },
  {
    content: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    content: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    content: "Two roads diverged in a wood, and I— I took the one less traveled by, And that has made all the difference.",
    author: "Robert Frost"
  },
  {
    content: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    content: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius"
  },
  {
    content: "This too shall pass.",
    author: "Persian Proverb"
  },
  {
    content: "Yesterday is history, tomorrow is a mystery, today is a gift.",
    author: "Eleanor Roosevelt"
  },
  {
    content: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt"
  },
  {
    content: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    author: "Martin Luther King Jr."
  },
  {
    content: "Ask not what your country can do for you – ask what you can do for your country.",
    author: "John F. Kennedy"
  },
  {
    content: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    content: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    content: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    content: "If you look at what you have in life, you'll always have more.",
    author: "Oprah Winfrey"
  },
  {
    content: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "James Cameron"
  },
  {
    content: "Life is what we make it, always has been, always will be.",
    author: "Grandma Moses"
  },
  {
    content: "The question isn't who is going to let me; it's who is going to stop me.",
    author: "Ayn Rand"
  },
  {
    content: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa"
  },
  {
    content: "When you reach the end of your rope, tie a knot in it and hang on.",
    author: "Franklin D. Roosevelt"
  },
  {
    content: "Always remember that you are absolutely unique. Just like everyone else.",
    author: "Margaret Mead"
  },
  {
    content: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson"
  },
  {
    content: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    content: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin"
  },
  {
    content: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
    author: "Helen Keller"
  },
  {
    content: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
  },
  {
    content: "Whoever is happy will make others happy too.",
    author: "Anne Frank"
  },
  {
    content: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson"
  },
  {
    content: "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou"
  },
  {
    content: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Oliver Goldsmith"
  },
  {
    content: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln"
  },
  {
    content: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth"
  },
  {
    content: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller"
  },
  {
    content: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas Edison"
  },
  {
    content: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    author: "Dr. Seuss"
  },
  {
    content: "If you can dream it, you can achieve it.",
    author: "Zig Ziglar"
  },
  {
    content: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    content: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson"
  },
  {
    content: "It is better to fail in originality than to succeed in imitation.",
    author: "Herman Melville"
  },
  {
    content: "The road to success and the road to failure are almost exactly the same.",
    author: "Colin R. Davis"
  },
  {
    content: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill"
  },
  {
    content: "Try not to become a person of success, but rather try to become a person of value.",
    author: "Albert Einstein"
  },
  {
    content: "It is better to be hated for what you are than to be loved for what you are not.",
    author: "Andre Gide"
  },
  {
    content: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison"
  },
  {
    content: "A man who stands for nothing will fall for anything.",
    author: "Malcolm X"
  },
  {
    content: "You have power over your mind - not outside events. Realize this, and you will find strength.",
    author: "Marcus Aurelius"
  },
  {
    content: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
    author: "Bill Keane"
  },
  {
    content: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    author: "Jimmy Dean"
  },
  {
    content: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    content: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale"
  },
  {
    content: "Either write something worth reading or do something worth writing.",
    author: "Benjamin Franklin"
  },
  {
    content: "Nothing is impossible, the word itself says, 'I'm possible!'",
    author: "Audrey Hepburn"
  },
  {
    content: "The only way to achieve the impossible is to believe it is possible.",
    author: "Charles Kingsleigh"
  },
  {
    content: "Act as if what you do makes a difference. It does.",
    author: "William James"
  },
  {
    content: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    content: "Never bend your head. Always hold it high. Look the world straight in the eye.",
    author: "Helen Keller"
  },
  {
    content: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson"
  },
  {
    content: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein"
  },
  {
    content: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein"
  },
  {
    content: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky"
  },
  {
    content: "I alone cannot change the world, but I can cast a stone across the water to create many ripples.",
    author: "Mother Teresa"
  },
  {
    content: "Whether you think you can or you think you can't, you're right.",
    author: "Henry Ford"
  },
  {
    content: "Perfection is not attainable, but if we chase perfection we can catch excellence.",
    author: "Vince Lombardi"
  },
  {
    content: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Charles R. Swindoll"
  },
  {
    content: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington"
  },
  {
    content: "I have learned throughout my life as a composer chiefly through my mistakes and pursuits of false assumptions, not by my exposure to founts of wisdom and knowledge.",
    author: "Igor Stravinsky"
  },
  {
    content: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    content: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair"
  },
  {
    content: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer"
  },
  {
    content: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  },
  {
    content: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    content: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson"
  },
  {
    content: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller"
  },
  {
    content: "The successful warrior is the average man with laser-like focus.",
    author: "Bruce Lee"
  },
  {
    content: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
    author: "Dale Carnegie"
  },
  {
    content: "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.",
    author: "Jim Rohn"
  },
  {
    content: "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.",
    author: "Ray Goforth"
  },
  {
    content: "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.",
    author: "Jim Rohn"
  },
  {
    content: "The number one reason people fail in life is because they listen to their friends, family, and neighbors.",
    author: "Napoleon Hill"
  },
  {
    content: "The reason most people fail instead of succeed is they trade what they want most for what they want at the moment.",
    author: "Bonaparte"
  },
  {
    content: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
    author: "David Brinkley"
  },
  {
    content: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt"
  }
];

const QuoteGenerator = () => {
  const [currentQuote, setCurrentQuote] = useState({
    content: "Loading...",
    author: "Loading..."
  });
  const [isLoading, setIsLoading] = useState(false);
  const [fadeClass, setFadeClass] = useState('fade-in');

  // Function to get a random quote from the local array
  const getRandomQuote = () => {
    setIsLoading(true);
    setFadeClass('fade-out');
    
    // Add a small delay to show loading state and smooth transition
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const selectedQuote = quotes[randomIndex];
      setCurrentQuote(selectedQuote);
      setIsLoading(false);
      setFadeClass('fade-in');
    }, 300);
  };

  // Load a random quote when component mounts
  useEffect(() => {
    getRandomQuote();
  }, []);

  // Add keyboard event listener for Enter key
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter' && !isLoading) {
        getRandomQuote();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isLoading]);

  return (
    <div className="container">
      <div className="qofday">Quote of the day</div>
      <div className={`quote ${fadeClass}`}>
        <div className="content">
          {isLoading ? (
            <div className="loading-dots">
              <span></span><span></span><span></span>
            </div>
          ) : (
            `"${currentQuote.content}"`
          )}
        </div>
        <div className="author">
          {isLoading ? "" : `-${currentQuote.author}`}
        </div>
      </div>
      <button 
        onClick={getRandomQuote} 
        className={`gen ${isLoading ? 'loading' : ''}`}
        disabled={isLoading}
      >
        {isLoading ? 'Generating...' : 'Generate Quote'}
      </button>
      <div className="keyboard-hint">
        Press Enter to get new quote
      </div>
    </div>
  );
};

export default QuoteGenerator;
