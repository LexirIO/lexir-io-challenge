This file will only countain some thought process, decision making and little remarks. It's a quick ready and I highly recommend it.

1. Overall structure of the project and package.json indicates that react is obviously fine to use. I read that it was allowed at the source repo, but "allowed" didn't
   really convince me that I could 100% use it. Being a next.js app I also know right away that I won't have to bother with routing set up. Cool stuff!

2. Let's run it. Yarn dev? Working fine, let's go.

3. I chose "Billing profile details". The page is divided into two main sections.

SECTION A

.Brand logo
.Avatar + user info
.Routing - Just a list of strings that match a icon.

SECTION B

.Title
.3 tables - Mainly the last two look pretty identical, one component should do the trick for both.

There are some details that have to be taken into account, and I am pretty happy with the chosen page because altought it's very simple, there is also some depth to it.

4. Just noticed table rows have what seem to be a 1px border, I never get these right.

5. Not quite sure if I should just go with simple css or if using tailwind is seen as a bonus. I'm going for the later.

6. The figma design seems to be some pixels off here and there, like the avatar having a left margin of 63px and the list below 64px. Not very relevant, but I'll assume that the website doesn't have to be exactly pixel perfect.

7. /Components folder should be at root level. Some people use it on /pages and this drastically increases build time.

8. Vercel link: https://lexir-io-challenge-bay.vercel.app/
