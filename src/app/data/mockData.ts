export interface User {
  id: string;
  username: string;
  name: string;
  avatar: string;
  bio: string;
  followers: number;
  following: number;
}

export interface Post {
  id: string;
  userId: string;
  content: string;
  image?: string;
  timestamp: Date;
  likes: number;
  likedBy: string[];
  comments: PostComment[];
}

export interface PostComment {
  id: string;
  userId: string;
  postId: string;
  content: string;
  timestamp: Date;
}

export const users: User[] = [
  {
    id: "1",
    username: "@sarahdesign",
    name: "Sarah Anderson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    bio: "UX Designer & Creative Director | Building beautiful digital experiences ✨",
    followers: 2847,
    following: 892,
  },
  {
    id: "2",
    username: "@alexdev",
    name: "Alex Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    bio: "Full-stack developer | Coffee enthusiast ☕ | Open source contributor",
    followers: 1523,
    following: 634,
  },
  {
    id: "3",
    username: "@emmacreates",
    name: "Emma Rodriguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    bio: "Digital artist & illustrator 🎨 | Sharing my creative journey",
    followers: 4521,
    following: 1203,
  },
  {
    id: "4",
    username: "@mikephoto",
    name: "Mike Johnson",
    avatar: "https://images.unsplash.com/photo-1500648067791-00dcc994a43e?w=150&h=150&fit=crop",
    bio: "Photographer | Traveler 📸 | Capturing moments around the world",
    followers: 8934,
    following: 423,
  },
  {
    id: "5",
    username: "@jasontech",
    name: "Jason Martinez",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    bio: "Tech entrepreneur | AI enthusiast 🤖 | Building the future",
    followers: 6234,
    following: 891,
  },
  {
    id: "6",
    username: "@lisafitness",
    name: "Lisa Thompson",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
    bio: "Fitness coach | Wellness advocate 💪 | Helping you reach your goals",
    followers: 12453,
    following: 567,
  },
  {
    id: "7",
    username: "@davidmusic",
    name: "David Williams",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    bio: "Musician & Producer 🎵 | Creating sounds that move you",
    followers: 8721,
    following: 432,
  },
  {
    id: "8",
    username: "@racheltravel",
    name: "Rachel Kim",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    bio: "Travel blogger ✈️ | Exploring the world one city at a time",
    followers: 15234,
    following: 1892,
  },
  {
    id: "9",
    username: "@tomchef",
    name: "Tom Anderson",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop",
    bio: "Chef & Food enthusiast 👨‍🍳 | Sharing recipes and culinary adventures",
    followers: 9876,
    following: 654,
  },
  {
    id: "10",
    username: "@sophiacode",
    name: "Sophia Brown",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop",
    bio: "Software Engineer | Python lover 🐍 | Building scalable systems",
    followers: 5432,
    following: 789,
  },
];

export const posts: Post[] = [
  {
    id: "1",
    userId: "1",
    content: "Just finished redesigning our company's dashboard! Really excited about the new color palette and micro-interactions. What do you all think about glassmorphism in 2026? 🎨",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop",
    timestamp: new Date("2026-04-22T10:30:00"),
    likes: 142,
    likedBy: ["2", "3", "4"],
    comments: [
      {
        id: "c1",
        userId: "2",
        postId: "1",
        content: "Looks amazing! The color transitions are so smooth 🔥",
        timestamp: new Date("2026-04-22T11:15:00"),
      },
      {
        id: "c2",
        userId: "4",
        postId: "1",
        content: "I'm still a fan of glassmorphism when done right. This is perfect!",
        timestamp: new Date("2026-04-22T12:00:00"),
      },
    ],
  },
  {
    id: "2",
    userId: "4",
    content: "Golden hour at the coast 🌅 There's nothing quite like watching the sunset over the ocean. Nature's own masterpiece.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    timestamp: new Date("2026-04-21T18:45:00"),
    likes: 521,
    likedBy: ["1", "2", "3"],
    comments: [
      {
        id: "c3",
        userId: "1",
        postId: "2",
        content: "Absolutely stunning! Where was this taken?",
        timestamp: new Date("2026-04-21T19:30:00"),
      },
      {
        id: "c4",
        userId: "3",
        postId: "2",
        content: "The colors are incredible! 😍",
        timestamp: new Date("2026-04-21T20:00:00"),
      },
    ],
  },
  {
    id: "3",
    userId: "2",
    content: "Finally deployed the new feature to production! 🚀 After 3 weeks of coding, testing, and debugging, it feels great to see it live. Shoutout to the amazing team!",
    timestamp: new Date("2026-04-20T14:20:00"),
    likes: 89,
    likedBy: ["1"],
    comments: [],
  },
  {
    id: "4",
    userId: "3",
    content: "New illustration series coming soon! Here's a sneak peek of what I've been working on. Inspired by vintage travel posters 🎨✈️",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop",
    timestamp: new Date("2026-04-19T09:00:00"),
    likes: 267,
    likedBy: ["1", "2", "4"],
    comments: [
      {
        id: "c5",
        userId: "2",
        postId: "4",
        content: "Can't wait to see the full series!",
        timestamp: new Date("2026-04-19T10:30:00"),
      },
    ],
  },
  {
    id: "5",
    userId: "1",
    content: "Quick design tip: Always consider accessibility from the start, not as an afterthought. Your users will thank you! 💙",
    timestamp: new Date("2026-04-18T16:00:00"),
    likes: 203,
    likedBy: ["2", "3"],
    comments: [
      {
        id: "c6",
        userId: "3",
        postId: "5",
        content: "So important! Thanks for the reminder 🙌",
        timestamp: new Date("2026-04-18T17:00:00"),
      },
    ],
  },
  {
    id: "6",
    userId: "5",
    content: "Just launched our new AI-powered coding assistant! It's been an incredible journey from concept to production. Excited to see how developers use it 🚀",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
    timestamp: new Date("2026-04-22T08:15:00"),
    likes: 412,
    likedBy: ["1", "2", "3", "4"],
    comments: [
      {
        id: "c7",
        userId: "2",
        postId: "6",
        content: "This looks amazing! Can't wait to try it out!",
        timestamp: new Date("2026-04-22T09:00:00"),
      },
    ],
  },
  {
    id: "7",
    userId: "6",
    content: "Morning workout complete! 💪 Remember: consistency beats intensity. Small daily actions compound into massive results over time. What's your fitness goal for this week?",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    timestamp: new Date("2026-04-22T06:30:00"),
    likes: 678,
    likedBy: ["1", "3", "4", "5"],
    comments: [
      {
        id: "c8",
        userId: "1",
        postId: "7",
        content: "Needed to hear this today! Thanks for the motivation 🙏",
        timestamp: new Date("2026-04-22T07:00:00"),
      },
      {
        id: "c9",
        userId: "4",
        postId: "7",
        content: "Planning to hit the gym 4x this week!",
        timestamp: new Date("2026-04-22T07:30:00"),
      },
    ],
  },
  {
    id: "8",
    userId: "2",
    content: "Pro tip for developers: Take breaks! Your code will be better when you come back with fresh eyes. Just spent 2 hours debugging something that took 5 minutes to fix after a walk 😅",
    timestamp: new Date("2026-04-21T15:20:00"),
    likes: 234,
    likedBy: ["1", "5", "6"],
    comments: [],
  },
  {
    id: "9",
    userId: "3",
    content: "Working on a new commission piece inspired by nature and geometry. The intersection of organic and structured forms is endlessly fascinating 🌿✨",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
    timestamp: new Date("2026-04-21T11:00:00"),
    likes: 445,
    likedBy: ["1", "2", "4", "6"],
    comments: [
      {
        id: "c10",
        userId: "1",
        postId: "9",
        content: "The color palette is stunning! 😍",
        timestamp: new Date("2026-04-21T12:00:00"),
      },
    ],
  },
  {
    id: "10",
    userId: "4",
    content: "Caught the most incredible sunrise at the mountains this morning. Sometimes you have to wake up at 4am for the perfect shot, but it's always worth it 🏔️",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    timestamp: new Date("2026-04-20T05:30:00"),
    likes: 892,
    likedBy: ["1", "2", "3", "5", "6"],
    comments: [
      {
        id: "c11",
        userId: "3",
        postId: "10",
        content: "Absolutely breathtaking! Where is this?",
        timestamp: new Date("2026-04-20T07:00:00"),
      },
      {
        id: "c12",
        userId: "2",
        postId: "10",
        content: "This is goals! 📸",
        timestamp: new Date("2026-04-20T08:15:00"),
      },
    ],
  },
  {
    id: "11",
    userId: "5",
    content: "Interesting thought: What if AI could help us be more creative rather than replacing creativity? That's the future we're building. Tools that amplify human potential 🧠",
    timestamp: new Date("2026-04-19T13:45:00"),
    likes: 567,
    likedBy: ["1", "2", "3"],
    comments: [
      {
        id: "c13",
        userId: "1",
        postId: "11",
        content: "100% agree! AI as a creative partner, not a replacement",
        timestamp: new Date("2026-04-19T14:30:00"),
      },
    ],
  },
  {
    id: "12",
    userId: "6",
    content: "Healthy recipe alert! 🥗 Just made this amazing quinoa buddha bowl with roasted veggies and tahini dressing. Nutrition doesn't have to be boring. Drop a 🥑 if you want the recipe!",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
    timestamp: new Date("2026-04-18T12:00:00"),
    likes: 721,
    likedBy: ["1", "2", "3", "4"],
    comments: [
      {
        id: "c14",
        userId: "1",
        postId: "12",
        content: "🥑 Please share the recipe!",
        timestamp: new Date("2026-04-18T13:00:00"),
      },
      {
        id: "c15",
        userId: "3",
        postId: "12",
        content: "🥑 Looks delicious!",
        timestamp: new Date("2026-04-18T13:30:00"),
      },
    ],
  },
  {
    id: "13",
    userId: "1",
    content: "Spent the afternoon reorganizing my design system. Clean, consistent components make everything so much easier. Documentation might not be glamorous, but future you will be grateful! 📚",
    timestamp: new Date("2026-04-17T16:30:00"),
    likes: 156,
    likedBy: ["2", "5"],
    comments: [],
  },
  {
    id: "14",
    userId: "3",
    content: "Just opened commissions for custom digital portraits! If you're interested, DM me. Limited slots available for May 🎨✨",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=600&fit=crop",
    timestamp: new Date("2026-04-17T10:00:00"),
    likes: 334,
    likedBy: ["1", "4", "6"],
    comments: [
      {
        id: "c16",
        userId: "6",
        postId: "14",
        content: "Your style is amazing! Sending you a DM now",
        timestamp: new Date("2026-04-17T11:00:00"),
      },
    ],
  },
  {
    id: "15",
    userId: "2",
    content: "Late night coding session 🌙 There's something peaceful about debugging at 2am when the world is quiet. Just me, my coffee, and an infinite loop I need to fix 😂",
    timestamp: new Date("2026-04-17T02:15:00"),
    likes: 289,
    likedBy: ["1", "3", "5"],
    comments: [
      {
        id: "c17",
        userId: "5",
        postId: "15",
        content: "Been there! Good luck with the debugging 💻",
        timestamp: new Date("2026-04-17T03:00:00"),
      },
    ],
  },
  {
    id: "16",
    userId: "7",
    content: "New track dropping this Friday! 🎵 Been working on this for months and I'm so excited to finally share it with you all. It's a blend of electronic and acoustic elements that I think you'll love 🎹",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
    timestamp: new Date("2026-04-22T14:20:00"),
    likes: 823,
    likedBy: ["1", "2", "3", "4", "5"],
    comments: [
      {
        id: "c18",
        userId: "1",
        postId: "16",
        content: "Can't wait to hear it! Your last album was fire 🔥",
        timestamp: new Date("2026-04-22T15:00:00"),
      },
    ],
  },
  {
    id: "17",
    userId: "8",
    content: "Just landed in Tokyo! 🇯🇵 The energy of this city is incredible. Starting my 2-week exploration of Japan. First stop: Shibuya Crossing! Any recommendations for hidden gems?",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
    timestamp: new Date("2026-04-21T22:30:00"),
    likes: 1245,
    likedBy: ["1", "2", "3", "4", "6"],
    comments: [
      {
        id: "c19",
        userId: "4",
        postId: "17",
        content: "Check out Nakameguro! Beautiful canal area with great cafes",
        timestamp: new Date("2026-04-21T23:00:00"),
      },
      {
        id: "c20",
        userId: "3",
        postId: "17",
        content: "So jealous! Have an amazing time 😍",
        timestamp: new Date("2026-04-21T23:30:00"),
      },
    ],
  },
  {
    id: "18",
    userId: "9",
    content: "Homemade pasta from scratch! 🍝 There's nothing quite like fresh pasta. It takes time and practice, but the results are so worth it. Who else loves making pasta at home?",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=600&fit=crop",
    timestamp: new Date("2026-04-21T18:00:00"),
    likes: 934,
    likedBy: ["1", "3", "5", "6", "8"],
    comments: [
      {
        id: "c21",
        userId: "6",
        postId: "18",
        content: "Looks amazing! What sauce did you pair it with?",
        timestamp: new Date("2026-04-21T19:00:00"),
      },
    ],
  },
  {
    id: "19",
    userId: "10",
    content: "Just deployed a microservices architecture upgrade for our platform. Reduced latency by 40%! 🚀 The key was implementing proper caching strategies and load balancing. Happy to share the details if anyone's interested!",
    timestamp: new Date("2026-04-21T16:45:00"),
    likes: 456,
    likedBy: ["2", "5", "7"],
    comments: [
      {
        id: "c22",
        userId: "2",
        postId: "19",
        content: "Would love to learn more about your caching approach!",
        timestamp: new Date("2026-04-21T17:30:00"),
      },
    ],
  },
  {
    id: "20",
    userId: "7",
    content: "Studio vibes tonight 🎧 Working on some beats and the creativity is flowing. Sometimes the best music comes from those late night sessions when you're in the zone.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
    timestamp: new Date("2026-04-20T23:15:00"),
    likes: 567,
    likedBy: ["1", "2", "4", "9"],
    comments: [],
  },
  {
    id: "21",
    userId: "8",
    content: "Travel tip: Book flights on Tuesday afternoons for the best deals! ✈️ I've saved thousands over the years following this simple rule. Also, always check incognito mode prices vs regular browsing.",
    timestamp: new Date("2026-04-20T12:00:00"),
    likes: 789,
    likedBy: ["1", "3", "5", "6"],
    comments: [
      {
        id: "c23",
        userId: "1",
        postId: "21",
        content: "Great tip! I never knew about the incognito trick",
        timestamp: new Date("2026-04-20T13:00:00"),
      },
    ],
  },
  {
    id: "22",
    userId: "9",
    content: "Sunday brunch special: Eggs Benedict with homemade hollandaise sauce! 🍳 The secret to perfect hollandaise? Low heat and constant whisking. Patience is key!",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&h=600&fit=crop",
    timestamp: new Date("2026-04-20T10:30:00"),
    likes: 1023,
    likedBy: ["1", "2", "3", "6", "8"],
    comments: [
      {
        id: "c24",
        userId: "6",
        postId: "22",
        content: "This looks absolutely delicious! 🤤",
        timestamp: new Date("2026-04-20T11:00:00"),
      },
    ],
  },
  {
    id: "23",
    userId: "1",
    content: "Working on a mobile-first redesign for a fintech app. The challenge? Making complex financial data digestible on small screens. Sometimes constraints breed the best creativity! 📱",
    timestamp: new Date("2026-04-19T14:30:00"),
    likes: 345,
    likedBy: ["2", "5", "10"],
    comments: [],
  },
  {
    id: "24",
    userId: "4",
    content: "Urban photography series: Street lights and reflections after rain 🌧️ I love how cities transform when it's wet. The reflections create a whole new dimension.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop",
    timestamp: new Date("2026-04-19T20:00:00"),
    likes: 1156,
    likedBy: ["1", "2", "3", "8", "9"],
    comments: [
      {
        id: "c25",
        userId: "3",
        postId: "24",
        content: "The composition is perfect! Love the mood",
        timestamp: new Date("2026-04-19T21:00:00"),
      },
    ],
  },
  {
    id: "25",
    userId: "10",
    content: "Hot take: Code reviews are more about teaching and learning than finding bugs. The best teams use them as knowledge-sharing sessions. Always be kind in your reviews! 💬",
    timestamp: new Date("2026-04-18T10:00:00"),
    likes: 678,
    likedBy: ["2", "5", "7"],
    comments: [
      {
        id: "c26",
        userId: "2",
        postId: "25",
        content: "Absolutely! Code reviews have taught me so much",
        timestamp: new Date("2026-04-18T11:00:00"),
      },
    ],
  },
  {
    id: "26",
    userId: "6",
    content: "30-day fitness challenge complete! 💪 Started with barely being able to do 10 push-ups, now I can do 50 straight. Progress isn't always linear, but consistency always wins. Who's ready to start their journey?",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
    timestamp: new Date("2026-04-17T07:00:00"),
    likes: 1432,
    likedBy: ["1", "2", "3", "4", "5"],
    comments: [
      {
        id: "c27",
        userId: "1",
        postId: "26",
        content: "So inspiring! You're crushing it 🔥",
        timestamp: new Date("2026-04-17T08:00:00"),
      },
      {
        id: "c28",
        userId: "8",
        postId: "26",
        content: "Amazing transformation! Keep it up!",
        timestamp: new Date("2026-04-17T09:00:00"),
      },
    ],
  },
  {
    id: "27",
    userId: "7",
    content: "Behind the scenes: Recording vocals for the new album 🎤 The creative process is messy, challenging, and absolutely rewarding. Can't wait to share the final product!",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=600&fit=crop",
    timestamp: new Date("2026-04-16T19:30:00"),
    likes: 901,
    likedBy: ["1", "3", "4", "6"],
    comments: [],
  },
  {
    id: "28",
    userId: "3",
    content: "Art process video coming soon! 🎨 Many of you asked how I create my illustrations, so I'm putting together a full tutorial. Stay tuned!",
    timestamp: new Date("2026-04-16T15:00:00"),
    likes: 543,
    likedBy: ["1", "2", "6", "9"],
    comments: [
      {
        id: "c29",
        userId: "1",
        postId: "28",
        content: "Yes! I've been waiting for this 🙌",
        timestamp: new Date("2026-04-16T16:00:00"),
      },
    ],
  },
  {
    id: "29",
    userId: "5",
    content: "Team update: We just crossed 100K users! 🎉 Grateful for everyone who believed in our vision. This is just the beginning. Building in public has been an incredible journey.",
    timestamp: new Date("2026-04-15T13:00:00"),
    likes: 2134,
    likedBy: ["1", "2", "3", "4", "6"],
    comments: [
      {
        id: "c30",
        userId: "2",
        postId: "29",
        content: "Congratulations! Well deserved 🎊",
        timestamp: new Date("2026-04-15T14:00:00"),
      },
      {
        id: "c31",
        userId: "10",
        postId: "29",
        content: "Huge milestone! Onwards and upwards 🚀",
        timestamp: new Date("2026-04-15T15:00:00"),
      },
    ],
  },
  {
    id: "30",
    userId: "9",
    content: "Pro chef tip: Salt your pasta water until it tastes like the sea! 🧂 Properly seasoned pasta water is the foundation of great Italian cooking. Don't be shy with the salt!",
    timestamp: new Date("2026-04-15T11:00:00"),
    likes: 867,
    likedBy: ["1", "6", "8"],
    comments: [
      {
        id: "c32",
        userId: "6",
        postId: "30",
        content: "Game changer! Thanks for the tip",
        timestamp: new Date("2026-04-15T12:00:00"),
      },
    ],
  },
];

export const currentUserId = "1";

export const getUserById = (id: string): User | undefined => {
  return users.find((user) => user.id === id);
};

export const getPostById = (id: string): Post | undefined => {
  return posts.find((post) => post.id === id);
};

export const getPostsByUserId = (userId: string): Post[] => {
  return posts.filter((post) => post.userId === userId);
};
