var imgs = [];
var imgIndex = -1;
var img;
var paint;
var subStep = 1600;
var z = 0;
var isStop = false;
var lineCount = 0;
imageCount = 0;
stopwatch = 0;
var loadTime;
var posts = [
  {
    "title": "Having a previous relationship does not make u happy",
    "text": "I see so many people yearn for someone here. News flash guys. Even if you get a girl it will not change a thing.\n\nHappiness comes from within. Ive done the whole relationship and fall in love thing.\n\nAnd let me tell you it gets stale fast.\n\nIm 35 and single. And i dont care to get in a relationship. The older you get the lesss you give a fuck about being with someone.\n\nYall will grow out of it.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/18lsk6i\/having_a_previous_relationship_does_not_make_u\/"
  },
  {
    "title": "It feels so painful to have attraction but not being naturally attractive yourself",
    "text": "It's hard to cope with life knowing that Im naturally unattractive. Obviously I can improve some parts of how I look but that is not my point. \n\nI know comparison is thief of joy but seeing guys who are naturally taller or have natural jaw line, nice facial features makes me sad knowing I don't have anythose yet I'm attracted to women with beautiful features.\n\n\nIt just feels like curse to be an unattractive man who is attracted to average - beautiful women",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/18kl7tl\/it_feels_so_painful_to_have_attraction_but_not\/"
  },
  {
    "title": "Talk to People that aren\u2019t there",
    "text": "I have a very annoying issue that I can\u2019t figure out what is actually going on. Maybe it\u2019s that I want to express myself but I don\u2019t know. I have ADHD and depression. I spend multiple hours a day pacing around having conversations with people that aren\u2019t there. I know they aren\u2019t there and i don\u2019t see people so i know it\u2019s not exactly schizophrenia. It\u2019s embarrassing and not sure what to do about it. What is this even called? I do this every day. I waste so much time doing this that i can\u2019t get things accomplished.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/18jv69o\/talk_to_people_that_arent_there\/"
  },
  {
    "title": "Tell me why being a virgin is my fault.",
    "text": "\n18m ugly short and autistic, never had a dad to teach me how to be a man and grew up in an incredibly abusive hysterical household with a mum and two sisters who need inpatient mental health care but are yet to receive it. \n\nI\u2019ve had terrible social anxiety and awareness my entire life. I\u2019ve been to therapy, I eat healthy and workout, I push myself constantly which is mental torture to be around new people all the time because people like to pretend that\u2019ll work. I put the effort in to look the best I can. \n\nNone of it matters, none of it works and I\u2019ll be alone forever. But everyone always claims it\u2019s the man\u2019s fault he\u2019s a virgin. Please tell me what part of this was my doing. What more can I do? I\u2019ve dedicated my life to this and gotten nothing. \n\nIf nothing changes soon I\u2019m going to end it all. I have everything ready to go, was already hospitalised for an attempt over the summer.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/18jiucm\/tell_me_why_being_a_virgin_is_my_fault\/"
  },
  {
    "title": "A man in his mid to late 20s will never experience that \"first love\" experience and energy from a women even though that is his first love. Thats just sad and depressing.",
    "text": "Pretty much the title.\nA man who never dated until his mid or late 20s which I think is becoming more common. Will never experience from a women that \"first love\" energy that she gave to the first guy she dated.\n\nMost men will end up with worn out tired\/broken women who really dont want to put any effort or energy to the current man shes dating even though thats the man first ever relationship",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/18kag0u\/a_man_in_his_mid_to_late_20s_will_never\/"
  },
  {
    "title": "Day 23\/24: I've been down. Really feels like there's a huge shouting match in my head all the time.",
    "text": "I'm exhausted with these thoughts. I have one part of me saying, \"things are never gonna get better.\" I feel like I'm falling back into the person I was 5-6 years ago, that hopeless depressed teen. \n\nIt feels like I never really lost that person though. \n\nAnd then the other part is saying, \"look at all you've accomplished in the last 5 months! Things are really gonna start getting better!\". \n\nIf things are getting better then why do I drink to feel? Why do I drag myself out of bed in the morning? Why have I lost my values? Why have I stopped taking care of myself? \n\nI really don't want to write. I don't have the motivation. I feel these words don't really describe half of what I even want to say. Maybe in tonights post I can think more clearly.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/18i9sy8\/day_2324_ive_been_down_really_feels_like_theres_a\/"
  },
  {
    "title": "Day 21\/21 of SSRI: Who am I? Who are you?",
    "text": "I often find myself asking this question. Dealing with this illness for the last 15 years has definitely taken a toll on many aspects of my life. It takes so much. \n\nI feel like over the years I've completely lost myself to this illness. can't be the only one who feels this way. I used have so many interests and can't remember when lost them.\n\nIt's taken my hobbies and pretty much all motivation to do anything. I just feel so lost all the time. \n\nI just don't know who I am anymore. I remember I used to be so interested in things and willing to learn. I couldn't give a fuck about anything now. \n\nI want myself back. \n\nWell... It's 08:20, and I'm sitting on the toilet hungover lol. Deep toilet thoughts.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/18goak7\/day_2121_of_ssri_who_am_i_who_are_you\/"
  },
  {
    "title": "shitty night",
    "text": "i have close friends, but just don\u2019t ever feel comfortable talking to them when i\u2019m going through shit. it\u2019s so frustrating that it\u2019s so much harder for guys to get shit off their chest. every time i\u2019m down, all i can do is hope one of my buddies will play video games with me or something to distract myself. \n\neverything is just downhill right now. i can\u2019t get a job no matter how hard i try. me and my girlfriend keep arguing because i don\u2019t like one of her friends. all i can motivate myself to do is play video games and drink. i feel like such a loser.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/18g7xvg\/shitty_night\/"
  },
  {
    "title": "A portrait of a man",
    "text": "\/Felt like writing a poem. \/\n\n\n\n\n\n\n\nHe must always be there \n\nBe unchanged, just for the better \n\n\nIt's important, difficult, unnecessary, trivial \n\nHis eyes are shifting, tired, attentive \n\nEmpty \n\nShe is his prey, the center of the universe\n\n\n He will give her everything, nothing, a house with a garden\n\n\n Heartless, but he hid his loved ones deep inside\n\n \nCold volcano of passion \n\nStrong but fragile \n\nQuiet but talkative\n\nMysterious, you read him like an open book\n\nHe doesn't know what love is, he died for his loved ones \n\nHe doesn't remember, he hasn't forgotten \n\nHe doesn't know what the spoon is for, he'll prepare a feast\n\nMature, as usual, mature, still mature\n\nHe climbed a mountain made of his own pain \n\nHe filled his own corner with real and pipe dreams \n\nA wood saw, a bandage and bitter coffee\n\n\nIs he still working or has he had enough sleep? \n\nLater, tomorrow, someday.\n\nEither he loves her or he is toying with her \n\nFor good, not good \n\n\nAnd for God's sake",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/18g7o4f\/a_portrait_of_a_man\/"
  },
  {
    "title": "I\u2019m kinda just\u2026 done with living",
    "text": "Idk I just feel like there hasn\u2019t really been any true positive aspects in my life leading up to this point, and any time I try to make a positive out of my dealt cards it feels like God himself is actively trying to one up the bullshit I gotta deal with. Like he\u2019s just kicking back enjoying my misery and pain with a side of popcorn.\n\nFrom birth to now, 22 years of life. My childhood and youth is wasted and I\u2019ll never get it back. Nothing positive to look back on and a shitty present to experience in real time. Every aspect of my life that I can think of is fucked, family, friends, women\/loneliness, job, fucking everything. Feels like I\u2019m cursed sometimes.\n\nI\u2019m just kinda over it at this point. I\u2019m not even mad anymore, just tired. Just wanna end this bullshit and be done with it already.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/18for75\/im_kinda_just_done_with_living\/"
  },
  {
    "title": "Day 17\/18\/19\/20 antidepressants: It's been quite the week.",
    "text": "First two days were not too bad. I couldn't help but drink for almost all of these days. I'm starting to think maybe I'm a alcoholic. It's not like I'm drinking copious amounts though so I'm fine.\n\nThird day I told someone something I didn't think I would ever tell someone. It was a massive weight off of me. I'm really thinking I found someone special. And I hope my dumbass doesn't screw this up. \n\nLast two days I've been struggling with some episodes of DP\/DR. I couldn't really snap myself out and I got a little scared but I just rolled with it. \n\nOther than that I've been getting a lot done around the house and I think this is the cleanest I've kept the place.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/18f5uf5\/day_17181920_antidepressants_its_been_quite_the\/"
  },
  {
    "title": "Navigating mental health taboos as a trans man",
    "text": "Hello! I\u2019m an autistic trans man (FtM) in their early 30s and diagnosed with CPTSD, OCD, GAD, and ADHD.\n\nFor the past 8 or so years, I've been engaged in both Cognitive Behavioral Therapy (CBT) and trauma-focused therapy. Despite having a supportive team of therapists, the challenge lies in the societal pressures associated with being perceived as a man. While I've always valued empathy, compassion, and vulnerability, societal expectations now label me as \"too emotional for a man\" or challenge traditional views of male stoicism. \n\nI'm aware that cisgender men often face unrealistic expectations, and I'm curious to know how others navigate and reshape these damaging stereotypes surrounding men's mental health. How have y\u2019all worked towards breaking down and rebuilding these narratives in a healthier way? Do y\u2019all have any advice on how to navigate these societal constructs and normalize men being mentally and emotionally mature? \n\nAny input is greatly appreciated!",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/18ew5ze\/navigating_mental_health_taboos_as_a_trans_man\/"
  },
  {
    "title": "I got told when I was 16 that I had aspergers. Now, 8 years later, I decided to go find out fully",
    "text": "Currently, I cut off my mom from my life when she told me a month ago that \"I wanted you to be normal\", basically saying, that when she was informed that I have aspergers, she decided not to get help, even though there were tools and ways to guide me with it. But the thing is, there are no written records of it, only when she told me when I was 16. Currently working at a job and after 3 months, I can get a paper that allows me to get 6 weeks off and go find out at hospitals.\n\nDid anyone have anything similar, finding out something when your over 20 years old but finding out no one did anything about it? How did you cope, what did you do? All answers are appreciated",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/18dkffh\/i_got_told_when_i_was_16_that_i_had_aspergers_now\/"
  },
  {
    "title": "How do you need with having an anxious attachment style?",
    "text": "Lately been feeling like a lot of my friendships were actually just me being something they hyperfixated on for a bit and now they\u2019re not as interested in me. Which is a clear sign to me of an anxious attachment style. \n\nI\u2019ve only recently learned about the different types of attachment styles, but how do you deal with this one internally in particular?",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/18clyv0\/how_do_you_need_with_having_an_anxious_attachment\/"
  },
  {
    "title": "I'm scared, and even though I have everything I feel I deserve nothing.",
    "text": "I'm sick of pretending I have value outside of my abilities, half of me tells me I'm unworthy, while the other half tears me in the other direction.\n\nI have so many blessings, a fiancee who loves me, a future, a decent blue collar job, family, etc. but I feel this self destructive desire for hatred and loss. \n\nI think about suicide, but I'm too much of a coward to do anything. Am I suicidal? Probably not, more likely a selfish dick who wants attention I don't even know anymore. I have this hanging hunger for misery but I don't want to damage those around me anymore than I already have. I don't know what's worse, sticking around being a burden, or leaving them to deal with the aftermath of I leave.\n\nThere are so many people who deserve the oxygen I'm breathing more than I do. I don't know what I am anymore. Damaged, proud and stuck up, sick in the head, or just fucked up all around. I'm sorry, I just don't know what to do anymore.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/18clk06\/im_scared_and_even_though_i_have_everything_i\/"
  },
  {
    "title": "Day 12\/13\/14 on SSRI - I've had more motivation than usual. I've been fucking up though. I feel doomed to be alone.",
    "text": "Everyday is still a struggle but I actually got a lot done around the house and I've been feeling good about that. I definitely notice some motivation. \n\nI've been told I look like shit a lot this week. And honestly I see it too. I haven't been sleeping. \n\nI almost died last night and I don't think I'm even exaggerating. I drank way too much. \n\nI drank because I was having a panic attack. I then proceeded to ruin like 5 relationships from my drunken high stupidity. I need to get sober I see that now, but it always starts right over. \n\nI feel doomed to be alone because I just can't ever find the time to work on myself or a relationship. All I know is self sabotage. I can't believe how fucked up I got in front of the ones I care about.\n\nI'm manic AF rn and I don't know what's going on. Idk if it's the pills, the alcohol, or just my mental illness. So I don't know if I'm truly getting better.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/18bmy70\/day_121314_on_ssri_ive_had_more_motivation_than\/"
  },
  {
    "title": "How do I just be myself?",
    "text": "Recently I have had lots of failures and I think I took them to heart and let them shape who I am. Not having felt like success in over an year has left me with a pessimistic view. The common advice of \"just be yourself\" is something I've across multiple times and do believe that it is a resolve. At my peek I felt like I was being myself unattached from the distraction and ideas of being someone. However at the moment, I have issues with memory and health overall and whenever I come across a helpful thought in my mind and forget it it hurts. How I've recently been looking at being myself is to treat a situation as it is isolated from those before it (the perception of me), this is helpful but has issues. If you feel comfortable please share how you perceive the idea of being oneself and if it helps you or other things that might be helpful in this condition. \ud83d\ude42\n\nPS: How I see it is similar to how one might see being in the moment.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/18b9og1\/how_do_i_just_be_myself\/"
  },
  {
    "title": "As a 26(m) who never been in a relationship, even if I manage to have a decent life. I still would feel depressed because I never got to experience being in love with a woman.",
    "text": "**I mean decent life minus having a women in my life**\n\nHonestly I would still be depressed because even if other aspects of my life are good, the fact that I never got to experience love with a women makes me sad. \n\n\nI look at one couple and all that depression comes back up. \n\nAlso in case anyone ask me to just focus on myself. I already am bud thanks but it doesn't get rid of how I feel.\n\nI'm not sure if its biological thing but I do feel like my biology or my body is punishing me  hard because Ive been unable to attract a women yet.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/18acasz\/as_a_26m_who_never_been_in_a_relationship_even_if\/"
  },
  {
    "title": "I just want my suffering to be over",
    "text": "I\u2019m a 22M, and I\u2019ve been losing my mind more and more with each passing day since a breakup a couple months ago\n\n\nShe fucked me over hard, and I\u2019ve been struggling so much since breaking up\n\n\nI feel like I\u2019m losing my mind. I\u2019m not just mourning the loss of the relationship, but the future I had planned as well. That\u2019s something that never occurred to me would happen with a breakup\n\n\nThere\u2019s a song lyric I heard recently, \u201cWhen you\u2019ve lost your whole world, where do you go?\u201d\n\n\nThat\u2019s exactly how I feel right now, like this lifeless mass taking up space and going through the motions of every day survival. I lost my whole world, and now it all feels meaningless\n\n\nI\u2019ve fallen back into addictions I\u2019ve been sober from for a couple of years. They\u2019re bad, of course they are. But they\u2019re the only thing that numbs the pain even for a moment\n\n\nI\u2019m barely hanging on here",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/188vnzk\/i_just_want_my_suffering_to_be_over\/"
  },
  {
    "title": "Tfw you forget how to make friends.",
    "text": "I have had the same friends since like middle school and I love them cause they have been my friends since forever. But as time has gone on we all moved apart but they are still the only people I really hang out with. I really want to make new friends but I struggle with bad social anxiety so often when I attempted in the past to make friends I would have no idea how to have a conversation. I joined a lot of clubs at my school to try to make friends but I just kind of end up drifting around not really talking to people and then just leaving feeling crazy bad. I just have no idea what to do. I feel like there is some cheat code to making friends but everyone knows it but me. Is there a way to practice talking to people so I can attempt to make new friends? I\u2019m just a little lost is all!",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/18866is\/tfw_you_forget_how_to_make_friends\/"
  },
  {
    "title": "Antidepressants Day 9: I'm broken. I'm so fucking broken. Everything's taking so fucking long!",
    "text": "The days are going by so fast and yet I'm getting nowhere. \n\nI can't really say that though. I am getting places, my patience is just non-existent. I want positive change now. I want my home to be a home. It's that thing I never really had. \n\nI'm tired, I'm so tired. I'm so stupid. I can't ever find the words to express how I feel. I feel no connection to the people around me or in my life. I'm a fucking alien. I don't belong here. \n\nI spoke to my dad a bit ago. He sounded tired and stressed out. Idk how he does it all. If he saw me now what would he think? \n\nI have so many people to call. I'm so overwhelmed. I don't want to feel a damn thing. I'm getting worse. I'm worse than ever.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/1879c38\/antidepressants_day_9_im_broken_im_so_fucking\/"
  },
  {
    "title": "What can I do to make myself cry?",
    "text": "For my whole life I've had to hold in pretty much every ounce of anguish that's happened to me, but about a few months ago I was by myself and going through something so I wanted to see what it was like to let myself cry entirely. Instead of crying I just started screaming for about 10 minutes, but I couldn't keep that up because I had neighbors under me. \n\nEven though that was nowhere near enough I felt like it truly did give me some relief. There's a lot in my life I haven't moved on from probably because of this so I'm going to take a little trip soon to someplace where I can have this happen for as long as I need. \n\nIt might take a month or two though so I'm hoping that the emotion doesn't just fade when I get there and then I'm stuck. Any tips on getting in touch with that negative emotion so you can release it?",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/18565je\/what_can_i_do_to_make_myself_cry\/"
  },
  {
    "title": "Antidepressants Day 6: First day since starting where I haven't drank.",
    "text": "I really felt like I had something written out for tonight, but I guess I wasn't really taking any notes today. \n\nI sort of relaxed today. It's been a long time since things were normal and I suppose there's still a lot to do before they are. I guess that's when the anxiety started to kick in. I spent most of my afternoon having a panic attack. \n\nI'm just tired but I have so much to do. I would love to ask for help but I'm starting to realize just how unreliable everyone is. And I get it, everyone has there own shit to deal with, but I just don't understand why they say they can help and then don't. \n\nMaybe I'm just being unreasonable. I guess all I really want is to just relax but I guess that's just not something I can do. At least not without multiple shots and a few cans.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/1847mxd\/antidepressants_day_6_first_day_since_starting\/"
  },
  {
    "title": "I hate how my mind works",
    "text": "I\u2019ve been using the Meetup for exposure therapy for myself and been going to events mostly for fun. And I\u2019m actually enjoying myself as well!\n\nBut then later on, my mind becomes super negative with thoughts like \u201cyou didn\u2019t find a friend or a girlfriend there. What\u2019s the point?\u201d\nI know *I* have been having fun lately, more fun than I\u2019ve had in a while. But my thoughts keep going back to feeling negative that I didn\u2019t find a partner.\n\nI wish I could control my thoughts more.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/183wpsc\/i_hate_how_my_mind_works\/"
  },
  {
    "title": "Antidepressants Day 4: it's thanks giving y'all. How'd it go?",
    "text": "I met like the coolest most chillest person ever lmao. She was actually amazing and so down to earth. She was so sweet.\n\nI think the two of us were just taking shots and she was just saying so much, like real shit too. I'm not a talker. And she actually noticed that right away I think, none of us are, so I'm glad she was there. \n\nLike this was actually the most genuine person I've ever met. \n\nMy crush also texted me and it was a much appreciated surprise. \n\nI feel like a piece of shit though. I shouldn't be like this. I shouldn't have got fucked up. \n\nWhy is it just so hard to be me? I don't know who I am. That's the answer I got. Who am I? The question I can't answer.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/182lrzo\/antidepressants_day_4_its_thanks_giving_yall_howd\/"
  },
  {
    "title": "Antidepressants Day 3: It was exhausted last night.",
    "text": "I woke up still drunk yesterday morning and went to work as usual (don't worry I don't drive). Then I went to my other job. Pretty easy day if I say so, thanks to the holiday. \n\nI was more down than usual today. My thoughts were racing. I still haven't showered and just wiped myself down. (Yeah, I'm disgusting Ik) \n\nAll in all I ended the night pretty good. \n\n\n(Late post, I had it In my notes but didn't have the time to post. I'll probably post day 4 later.) Happy thanks giving to y'all in the US!",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/18246qu\/antidepressants_day_3_it_was_exhausted_last_night\/"
  },
  {
    "title": "Suicidal thoughts relapse #1",
    "text": "I was doing good. \n\nThen, I thought of my inherent loneliness. I told myself I\u2019m not worthy of love from anyone, that I would never find someone who I can understand and who understands me. I then said that, even if I did, I would never form any kind of relationship through it. I then thought: if I am going to be alone forever, I should end my life now to avoid the further pain of existing. This was a few minutes ago. My streak has been broken, officially. \n\n2 months.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/181lx8p\/suicidal_thoughts_relapse_1\/"
  },
  {
    "title": "Doing Everything Right To Make New Friends, Still Getting Hurt Most of the Time",
    "text": "As proud of myself as I am for realizing that rejection sensitivity is my biggest weakness this year, I still face a lot of them - from groups I\u2019m a part of, at work, and elsewhere. Today especially was difficult: I tried talking to a couple of girls at pickleball and I was rejected and in one case, I was left with no one to play with because people would rather play with their friends rather than bringing a new person in. Most of my reading this year has been about social skills and I\u2019ve applied those skills. Still, all I know is pain; I\u2019m all too familiar with the phrase, \u201cI have enough friends.\u201d\n\nIf things don\u2019t get better for me next year, I\u2019ll be looking at a permanent solution to my problems. I\u2019m not spending money hand over fist on therapy, clothes, hobbies, etc. to only know pain.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/180xfnx\/doing_everything_right_to_make_new_friends_still\/"
  },
  {
    "title": "Why does taking time to myself\/ not being available for others and or work feel so selfish and wrong?",
    "text": "Today has been kinda crappy, we just got internet back at the shop I work at and I\u2019ve been in a very bad mood and don\u2019t see myself being productive or efficient for the rest of the day.\n\nI\u2019m probably going to just leave and go home but it feels incredibly selfish.\n\nI know work and being there for others is important, but I feel like every time I try to prioritize myself and my mind, it is the wrong thing to do.\n\nThis isn\u2019t just something happening today, but any time I feel like I don\u2019t provide or be there for my family and friends, I feel useless.\n\nI was hardwired in my early years and especially in high school to be there and be useful at all times. I can\u2019t really seem to break that programming. I like being useful, but sometimes I just wanna relax or work on my mind.\n\nIf anyone knows good tips on how to prioritize themselves and not feel selfish I would like to hear them.\n\nThanks.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/180mrbn\/why_does_taking_time_to_myself_not_being\/"
  },
  {
    "title": "I'm going back on my antidepressants.... Day 0 of crawling my way out this pit",
    "text": "It's with a heavy heart that I say this, but I really don't know what else to do anymore. \n\nIt's been so long since I've felt anything but bad. I can no longer distract myself the way I used to be able too. I no longer have any interests. I didn't think it was possible to sink even lower, yet here I am.\n\nI hate myself and I feel like everyone else does too. I know this can't be true though. \n\nI don't want this but my brain just doesn't fucking work anymore. There's nobody else to turn to so it's all up to these pills to save me now. I can't keep turning to the bottle because Ik it's killing me.\n\nWhat a joke I am. I hope I can come back a few months from now and laugh at this. I hope I'm a happier person sometime next year.\n\nI'll keep you all updated.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17zg6vc\/im_going_back_on_my_antidepressants_day_0_of\/"
  },
  {
    "title": "Am I wrong somehow ?",
    "text": "I am a teenager in 10th Grade, My Father passed away when I was in 5th Grade, I don't have any friends and No one listens to Me at school and home even tough they end up following my advice. I am the Smartest kid in my Class, so someone students hate me and they call me the teachers' pet, My classmates doesn't interact with me and only remembers me when they need help or something( usually Stapler and Staples)\n\nMy mother is a single mother and a bit overprotective, She cares about me Alot but Doesn't know what I want actually, She doesn't even care about my Interests. She doesn't even try to listen. She Also scolds me alot, I am an atheist but my mother believes in God so I respect her believes but she doesn't respect my believes and opinions.\n\nI feel very alone and lonely, I like Physics and playing video games, so I usually indulge in them.\nI don't know what to do anymore",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17xzip5\/am_i_wrong_somehow\/"
  },
  {
    "title": "Women",
    "text": "Nobody has ever liked me. I\u2019m 23 & still a virgin. Never had a girlfriend. Never kissed a girl. Never held a woman\u2019s hand. Nothing. Every woman I ask says I look like a shriveled up raisin or that I look like a make a wish kid. I\u2019ve been to rehab 6 times since 2016 for this same reason. Since no women like me then I don\u2019t find happiness or a point in living.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17x1xr4\/women\/"
  },
  {
    "title": "Tired of pretending to people all the time I don't care.",
    "text": "Vent\/seeking guidance\n\nThat's all I seem to be anymore is just a useful pawn for people. No one cares, and the older I get it I just find it more and more evident, that people don't actually care. They say that they care, but in truth they don't, they just say that they need to say in the moment to get them out of hot water. I stop and think, and I have basically no one looking out for me right now. One relative I used to know is in prison now, and hopefully gets out soon. But no one cares, I'm invalidated everywhere and everyone and told that other people have it worse and that I should feel bad for them, or that I need to suck it up. I'm tired of running and pretending that it doesn't hurt. But people just don't even care. There's people that have it much better off than me, and they have people feel sympathy for them. Sympathy for someone else and other people, and I can hardly get any sympathy from one single person alone that isn't a counselor or psychiatrist.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17x51ye\/tired_of_pretending_to_people_all_the_time_i_dont\/"
  },
  {
    "title": "Anyone here know how to deal with mommy issues",
    "text": "I was raised by micro-managing and controlling mother throughout my life. I didnt receive much warm and caring love from my mom either. She would always be little me and compare me too others, as well making me feel bad about being myself.\n\nAnyways, I realize I had mommy issues when I was looking at other women to give me the loving, caring mom I never.\n\nDid anyone have this issue and fixed themselves and if so how?",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17wxpq9\/anyone_here_know_how_to_deal_with_mommy_issues\/"
  },
  {
    "title": "Y\u2019all ever feel like good things aren\u2019t allowed to happen to you?",
    "text": "Like you\u2019ve just accepted after years and years of misfortune that good things aren\u2019t allowed to happen in your life?\n\nWhether it be a girl, a nice job, or just peace in general and to go one day without problems? You feel like somehow the universe has destined you for bad luck since birth no matter how hard you work to make things in your life not suck so bad?\n\nI feel like God himself is constantly dropping hints that I should probably take my own life since there\u2019s nothing good to look forward to now. Fuck it I might listen to him one day.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17wd464\/yall_ever_feel_like_good_things_arent_allowed_to\/"
  },
  {
    "title": "She's married now...",
    "text": "I met someone too, but just like you I can be a ghost too. It's okay though, I have Evan here with me. \n\nI can relate to you too. You wouldn't believe how terrified I was when the doc said, \"instant death\". Isn't that everything I asked for though? I guess I got what asked for.\n\nDid I not ask for you as well? Maybe I didn't want you enough.\n\nI know you're still a good person though and you deserve everything you have. I had that $5k . I still ask myself why I didn't even put in $420.\n\nI said I wanted to help more people but really I was just trying to help myself. I really hope you made it to Arizona though. \n\nI wish you happiness. I see that smile, the same one you gave me. I'm just glad Evans still here. \n\nI wish many more years for the both of us.  I'm not in the best place rn but I have hope it gets better soon.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17widbf\/shes_married_now\/"
  },
  {
    "title": "Can\u2019t find motivation",
    "text": "M\/29\n\nHello everyone, \n\nI just wanted to post some thoughts and maybe receive some guidance. I\u2019ve been noticing lately how little motivation I have. I know the potential that I have and I know how to achieve it, but I don\u2019t have the drive and motivation to reach that potential. It\u2019s frustrating because if I had the proper motivation and drive, I could achieve exactly what I want in life.\n\nYou\u2019d think that would be enough to garner up some motivation, but it\u2019s not. Anyone else feel like this? Any advice on how to overcome this? \n\nJust for reference my sleep schedule is alright, nothing too crazy. Diet is also alright, not too great but not too bad. Get a decent amount of exercise in as well.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17w2msf\/cant_find_motivation\/"
  },
  {
    "title": "How can I help my friend?",
    "text": "I\u2019m a girl wondering how to help my male friend. I know he\u2019s struggling, but he obviously isn\u2019t vocal about it. I really like him and I want him to be happy. He has low self esteem and he\u2019s very antisocial and quiet. Neither of us are good at conversation, so I just sit beside him to keep him company. I hate when he\u2019s alone and I hate how the other people treat him at school. I want to let him know that I care about him or whatever, but I don\u2019t want it to be awkward or sappy. I try to do little things for him, and the more I do, the more I notice how he thinks he isn\u2019t worth these small gifts. It\u2019s hard to tell others that I\u2019m worried about him because most of my friends couldn\u2019t give a rats ass about men and their mental health. How do you think I can go about showing my appreciation and care for him? I don\u2019t want it to be awkward, but if it has to be then I guess I must just move past that.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17vj24b\/how_can_i_help_my_friend\/"
  },
  {
    "title": "I wish I could be the person who I am drunk all the time",
    "text": "I went to a wedding this weekend and had an absolute blast the whole time. But I noticed that as the night went on and I was having more and more drinks, alcohol did it\u2019s normal thing. I wasn\u2019t as nervous talking to people, I felt like I was able to have fun conversations with people, and I wasn\u2019t afraid to be a little flirty at times. But when I\u2019m sober, I start to overthink whenever I\u2019m talking to people. I\u2019m suddenly so much more reserved and I keep my more silly comments to myself. I feel like if I could be my drunken self while being sober, I wouldn\u2019t be so afraid to have more fun in life. I\u2019m not saying this to mean I\u2019m gonna just try and be drunk all the time though. Quite the opposite actually. It would be a horrible idea to do that, but I don\u2019t know how to achieve this goal.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17u1w00\/i_wish_i_could_be_the_person_who_i_am_drunk_all\/"
  },
  {
    "title": "What to do when I lost a little respect for my parents",
    "text": "Saw my mother drinking by herself the other day and she passed out on the floor hitting her eye and bleeding needing to go to the hospital she claims she passed out because she\u2019s diabetic and not healthy. I live with my parents as I\u2019m studying in uni and I wish to respect her because she\u2019s my mom but I can\u2019t help but feel like a lost a little bit of respect",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17tzdc2\/what_to_do_when_i_lost_a_little_respect_for_my\/"
  },
  {
    "title": "Discussion with my mother",
    "text": "This morning, on my weekly call to my mom (I live 2000 miles away) she asked me about anything new in my lifei told her about Norah Vincent'sbook \"Self-Made Man\" that I started reading the other day. After giving her a brief rundown of the book and a little about the author we got yo talking about the disposablity of men in today's society. She told me how much she supported men's rights and hated how society views men. I don't remember what I said exactly, but her response was that women have it just as bad if not worse. I described some things I dealt with when married to my ex-wife and explained that I had absolutely zero resources and no support in place simply because I have a Y chromosome and even tossed back her words and how I never said anything about women having it easy, but she quickly threw in my face that they did the moment I expressed facing difficulty. \n\nI font know what I'm looking for here, I think I needed to just get that off my chest.\n\nThanks for listening.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17tx3ve\/discussion_with_my_mother\/"
  },
  {
    "title": "I can't get over a past girlfriend. I'm 31 now and feel there's no point dating",
    "text": "I had someone who could've been perfect for me when I was 23. She was sweet, kind, sassy, playful and very understanding, and she truly loved me. \n\nWe only spent little time together but I can't get over her. I had a gf since, but I never felt so understood and cared about as with that girl. Now I feel that my soul has closed itself. I am used to being a loner and don't really feel love anymore like I used to. This is what I've become because I made a bad decision.\n\nWill this ever change?",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17t5o6h\/i_cant_get_over_a_past_girlfriend_im_31_now_and\/"
  },
  {
    "title": "My boyfriend's burned out from school\/work\/family health issues, can I help him out of it?",
    "text": "I'm 25 (f), and I worry about my boyfriend's mental health. He's been burned out for months now. He was once loving, energetic and positive, now he is cynical, negative, filled with hate and treats me like a distant friend. He also stopped eating, sleeping and having fun for a while now. I know that his family's health issues, unneccessary hard university studies and non-rewarding work causes this, and I want to help him feel human again. Did anyone else suffer from this, and if yes, how did you managed to get back to normal? What would've been helpful from your loved ones? I still treat him like a king, I make him coffee, food, I compliment him. He'd always been praised and cherised by me. \n-if I want to talk about it he says it is fine\n-i've suggested him putting off a class or two for next semester but he would feel like a failure then \n-maybe paying someone to do some of his project works for classes? idk let me know",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17t3boc\/my_boyfriends_burned_out_from_schoolworkfamily\/"
  },
  {
    "title": "I get more insults than i do compliments",
    "text": "I don\u2019t know why, but for some reason I am just insulted. I go to high school, and many of the students have insulted me for no reason, one female student said I had A large nose and I had never even said A word to her before that. Sometimes people will ask for help and I can\u2019t decline due to not wanting to look like and asshole. If I do decline I will be insulted. Sometimes my own father mocks the way I talk or respond to questions. I feel as if nobody cares about me. Many of my close cousins see me as annoying, I try to have A conversation but they push me away, treating me like nothing. Am I nothing? I am to them at least.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17snzlk\/i_get_more_insults_than_i_do_compliments\/"
  },
  {
    "title": "Feeling trapped",
    "text": "I don't understand why I feel like I'm trapped but I feel fear that something bad is going to happen if I speak out. Living in a rough area with assholes at school only made my mental health worse, I'm trying to plan scenarios in my head instead of just letting it out. \nAnyone who has spoke out to someone, please help me understand what that feeling of fear is and how to get around it.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17rpdbk\/feeling_trapped\/"
  },
  {
    "title": "what type of damage this could happened to me because of this? i'm always people pleaser",
    "text": "When I was 11 years old, I hated being without the company of those I met in my school, meaning that when I was transferred to another class, I used to cry for days until I returned to those I knew again, but they were hurting me, humiliating me, making fun of me, and treating me very badly, but I still used to cry when they would quarrel with me or show any emotion. By deprivation or being kept away from me, does this indicate the presence of trauma?\n\nmy family and I was always convincing me to only be friend with clever people who are doing good at school. but all of them was that type of person that I've mentioned that treated me so unwell. i was following every instruction my family told me and one of them was to stick to clever people.\n\nwhat type of damage this could happened to me because of this? i'm always people pleaser",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17qndyx\/what_type_of_damage_this_could_happened_to_me\/"
  },
  {
    "title": "I'll be never enough",
    "text": "I'm done.\n\nI'm trying my hardest to be the best man for everyone I care about, yet my effort is overshadowed by mistakes along the way. Nobody notices my effort, nobody notices that I'm trying my goddamn best.  \nOne slip-up - everything I've done is forgotten, I'm criticized and I'm back to square one.\n\nWhy? Why nobody notices my effort and say anything good about it? Why do I even try to be supportive, empathetic if in the end all I get is criticism?\n\n&#x200B;",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17ptcys\/ill_be_never_enough\/"
  },
  {
    "title": "I don't know where I'm going or where I am. I feel like its time to give up.",
    "text": "Everyday feels like the same but as I get older I feel that I'm missing something, that there is just nothing I'm working towards anymore. I feel like I'm just a leech on my family and friends and that I can't and most likely won't ever be able to make anything of myself. Even now as I attend the college I always planned to go too and study the major that I wanted, I always find myself just giving up on studying or even trying in any class that seems challenging, I feel worth less and like I'm just waiting until I dropout and kms so that I'm not a burden on my parents. I started taking my antidepressants again but this time they just don't feel the same, I wanna cry and just go die instead of suffering another minute of this confusing life.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17pdxxd\/i_dont_know_where_im_going_or_where_i_am_i_feel\/"
  },
  {
    "title": "Not sure what to do",
    "text": "My partner is depressed and I feel like im only making it worse. I seem to be irritating them. I'm starting to think it's me and they would be much better off without me. Like maybe I'm not good enough for them. I feel like their lives would significantly improve if I wasn't there. Like they could finally be okay without me. I don't really enhance their life, I do my best but I really feel like I make it harder. I wish I wasn't so dumb and useless. I wish I had more to offer them.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17np62v\/not_sure_what_to_do\/"
  },
  {
    "title": "I had an existential crisis when I was 7 and I never recovered.",
    "text": "That was the night I realized nothing would ever be the same. Everything just lost so much meaning. It was too much loss for me to handle. What hurts the most is how they all just ignored it. \n\nI hope you know I may never have a healthy relationship. I may never love myself. I may never love you.\n\nI'm gonna try my best to be the person I want to be. You no longer have a say in the decisions I make. \n\nI'm tired.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17lw4ue\/i_had_an_existential_crisis_when_i_was_7_and_i\/"
  },
  {
    "title": "Too soon.",
    "text": "https:\/\/www.reddit.com\/r\/malementalhealth\/s\/Hc2JRS0jFt\n\nSo a certain poster decided to post this, and after I called him out on how tasteless this is (with a few too many choice words to his inbox I admit) decided to accuse me of not living in Maine (I do live in Maine, Lewiston is barely even a short drive from me) and block the comments. Mods, can we take this damn post out of here and prevent crap like this from happening again please? It\u2019s barely been a week, people are still suffering, **men from the area literally come here for advice** and we don\u2019t need them driven off by this worthless drivel.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17lkbnl\/too_soon\/"
  },
  {
    "title": "Feel like killing myself",
    "text": "I've been dealing with an insincere relative for years. Unfortunately, I'm financially dependent on my family because of my mental health. This relative pays the bills, and for that reason alone, thinks they can treat me however they want. I said I wouldn't argue with them anymore, but I lost it over a small comment they made. My mood was already bad, so I interpreted their comment as a snide remark. I blew up, got as LOUD as possible to where my voice actually strained. It went on for 15-20 minutes I don't even know. I absolutely look like the villain. After a year of playing it cool, I totally failed myself and, most of all, God. I'm religious, and just got tired of being the good guy. Who would come to Jesus after seeing the way I acted? I don't know. I thought I was being a tough man, but now I just feel so small like I'm ready to end this madness.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17jm4o5\/feel_like_killing_myself\/"
  },
  {
    "title": "Is insoles the best way out for short men? And how do I accept my height?",
    "text": "I'm 5'7 and a bit\" and 22. I still feel very insecure about my height. I've been wearing 2.75 inch insoles since last year to become 5'10\", but it's doing me no good in the long run. Also it's really uncomfortable. I just want to accept my height. I mean I'm even thinking about going to Florida in the US to undergo a leg lengthening surgery procedure to become maxed 5'11\". While 5'11\" is still not considered tall, it's the solid height in every country (save the Netherlands) in the world that you wouldn't get making fun of...\n\nAny advice would be appreciated.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17hg29f\/is_insoles_the_best_way_out_for_short_men_and_how\/"
  },
  {
    "title": "I Feel I\u2019ve Failed As A Man In Some Ways",
    "text": "Coming from a conservative, semi-religious background (raised Protestant, converted to Catholicism as an adult, then left organized religion altogether due to lack of social support), I feel that I\u2019ve failed as a man for a couple of reasons:\n\n1. Being shy and introverted for the majority of my life, something I\u2019ve made a greater effort in rectifying recently with the help of therapy. \n\n\n2. Not picking a better major in college. My education was free, which is a blessing in and of itself, but I really wish I\u2019d picked something like engineering or something else more advanced.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17fgayg\/i_feel_ive_failed_as_a_man_in_some_ways\/"
  },
  {
    "title": "How the fuck do I keep going?",
    "text": "It feels so fucking hopeless. I thought things were going to change when I left.\n\n\"More stuff, the more I want it, more I feel l'm fuckin' stuck\" heard this and I felt that.\n\nThey buy my time. I don't know why I'm so upset though. What else would I be doing?  I wasn't doing anything anyways. \n\nNow I drink half a bottle just to get some decent sleep. \n\nSo this is what it all led up too? How do I accept my new reality? Will I die soon? Maybe it doesn't even matter? \n\nWhen did this glass become empty? It's no longer half full.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17f4hqk\/how_the_fuck_do_i_keep_going\/"
  },
  {
    "title": "What do you guys think?",
    "text": "I am (28,M) just started using dating app to find serious relationship. I matched with a girl and it\u2019s being great initially. Slowly, she began to rant about guys at her work place and me being a nice guy always listen to her and try to support her. Lately, she began to blame all the guys about everything and keep repeating it everyday. I couldn\u2019t even talked about anything without we getting into this topic. I lost my patience and began to argue with her about how not all guys are misogynists. I being a single for a long time so I tried my best to maintain this relationship. After a while I apologised and explained that I understood her terrible experience at work place but that doesn\u2019t mean you need to put down all they guys out there. She replied \u201cno wonder you\u2019re being single for such a long time, the world doesn\u2019t revolve around you only\u201d. It\u2019s kinda pissed me off and I decided to break up. Am I wrong to take this decision?",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17e6uto\/what_do_you_guys_think\/"
  },
  {
    "title": "Thinking of just receding into myself until everyone forgets me so I won\u2019t be missed when I inevitably kill myself.",
    "text": "Life has been very rough for me this past month. I have a boyfriend and when we become intimate, I feel absolutely nothing inside of me.\n\nIn fact, in general I feel no positive emotions and when something good does happen, I feel hollow. \n\nNothing really seems to make me happy, and I doubt finding a man or woman who loves me will help.\n\nThe past few days I have had little drive to interact with other people and I have felt alienated from the human race.\n\nI don\u2019t think I can achieve long term happiness and am tempted to just off myself since I know I\u2019m going to live an isolated life with no real happiness.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17ad95b\/thinking_of_just_receding_into_myself_until\/"
  },
  {
    "title": "I have been getting bullied so much lol",
    "text": "I probably have never been bullied this much in my entire life, getting bullied about literally EVERYTHING about me. I was used to it but now that I am kinda not, I cant lie: it does hurt a little bit lol. But I\u2019ll push trough it as I always did. But one guy in particular I would fuck him up so bad if only there were no consequences to that. I gotta just take it. I can\u2019t risk my future for a dumbass, its not worth it\ud83e\udd23. But I\u2019ll fuck him up, sooner or later.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17a97bp\/i_have_been_getting_bullied_so_much_lol\/"
  },
  {
    "title": "Feeling like a failure at 30",
    "text": "It's been a crazy year for me. I'm 30. After a couple of stressful years, I reached a breaking point early this year and unfortunately suffered from pretty severe depression. Unfortunately, during all of it, I got betrayed, slandered and screwed over by my business partner, and ended up leaving the company on not-so-good terms. My depression has slowly recovered, and I'm now figuring out what's next for my career. \n\nDuring my months of depression, I've alieanted many, many friends. My family doesn't really understand what I went through. I'm single, no girlfriend -- partly a factor of focusing all my time on work in the past couple of years. On days like this, I feel extremely lonely. I feel like a failure at 30. I've disappointed many people and myself. I don't know what to do. :(",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/17a4o7b\/feeling_like_a_failure_at_30\/"
  },
  {
    "title": "Wishing",
    "text": "I wish that there was a place on the internet that actually felt safe to be a trans man.  Or a support group for mental health that wasn't a breeding ground for hatred and unhealthy coping mechanisms (not saying that it's like that here, just in general experience) I just want to feel safe somewhere. My country is becoming less and less safe and the state I live in is unsafe for trans people and getting worse every vote. I can't talk to anyone around me because how do you explain a cauldron of trauma illnesses to people who have never had any sort of experiences to compare to? You get the face of pity or get told \"it's in the past, get over it\" i know that the internet is full of horrible things, but I think it's not asking for much to want to feel safe somewhere.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/179gsmu\/wishing\/"
  },
  {
    "title": "Help pls",
    "text": "I don\u2019t know why but I\u2019ve been having intense stress and anxiety over my past. I\u2019d say I\u2019m a pretty good looking guy, but I am just introverted and also dealt with social anxiety in the past. Now I\u2019m overthinking all the opportunities I had with girls. Mainly where I noticed they\u2019d give me a stare or look (sometimes they\u2019d be smiling too). This could be in the hallway of high school or later on in my life at a club. But I never approached. It just doesn\u2019t come naturally to me. I\u2019ve tried to work on this and have had some success, but I\u2019m just overthinking the past. Everyone assumes I\u2019m good looking and so I should be getting a lot of girls easily, but I also have a personality to me that made it harder\/continues to make it harder.\n\nI have an issue with validation from others if I get with women regularly. But I feel like it\u2019s more than that too. I just feel like a failure as a man if I don\u2019t since I\u2019ve been blessed with good looks.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/1796g0x\/help_pls\/"
  },
  {
    "title": "I wish I could've changed my situation, but I can't, so I'm considering suicide.",
    "text": "I struggle with my own image and with my life situation overall. Being born in conservative country that doesn't accept people out of norm, i felt struggle growing up. I don't like being male, I don't want to be in a competition with other men to please some woman. I dislike how my body looks, I want to look pretty, look feminine, be a woman. I'm bisexual, but it's a struggle for me to find partner. I feel hopeless, I don't think I can be happy in my conditions.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/178kzpg\/i_wish_i_couldve_changed_my_situation_but_i_cant\/"
  },
  {
    "title": "Physical deterioration from mental health?",
    "text": "Does anybody feel like they are aging 5 times faster with poor mental health? \n\nEver since I left university I\u2019ve been on the decline with no direction in life, I\u2019m 21. And in the last declining 2 years my skin has gotten so many more lines, my hairline has gotten worse, I feel like shit and struggle to sleep including right now.\n\nIs this shit reversible if I find confidence and happiness? I don\u2019t know the solution to my problems but looking worse and worse every day does not help.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/1788r7k\/physical_deterioration_from_mental_health\/"
  },
  {
    "title": "Reminder: Some people will never be happy",
    "text": "There are people that will never feel true happiness. You might be different, but that's no excuse to deny reality. If you want to argue otherwise to feed your ego, and present yourself as a savior, then this post is not for you. This post is to acknowledge those who are different, and whose struggles are not so easily understood. I only hope the best for you, as much as you can get.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/177hhcr\/reminder_some_people_will_never_be_happy\/"
  },
  {
    "title": "I'm a failure.",
    "text": "Recently, we'll for the past couple week I've been feeling suffocated by  my inability to function in life, everyday I wake up hoping the next day doesn't come, every exam, test, attempt at being better has failed. I can't do what I use to be good at, no matter how hard I try I can't be better, I'm losing the ability to be better I feel numb in my own skin, I don't know what to do, I don't want to talk to my friends unfair to them, nor do my parents deserve to feel like they failed me. I don't know what to do, I'm tired, feel ill ever waking moment, I'm not happy how I am but I can't improve do I just stick it out hope for the best, it's not just stress anymore honestly I don't know what it is, I feel like everyone's ahead of me like everyone secretly been told something how to become an adult. Am I missing something have I screwd up?",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/176j9fh\/im_a_failure\/"
  },
  {
    "title": "I feel so negative about my appearance. How do I improve my self image other than losing weight?",
    "text": "I\u2019m 24M and I\u2019m currently obese at 260 pounds. My goal weight is 170 pounds so it\u2019s going to take a long time to get there. About 8 months to a year of consistency. I know losing weight will help with my body issues, but unfortunately they are affecting my weight loss journey.\n\nI feel so deeply unattractive. The negative thoughts trigger my binge eating disorder. I feel so hopeless that I\u2019ll ever feel positive about my body that in the moment I say screw it and eat an entire pizza plus a pint of ice cream or a very large fast food order. I\u2019ll feel terrible afterwards, but the damage is already done. The binges completely derail my weight loss, I feel even worse, and the cycle continues. \n\nSo I\u2019m looking for advice on how to improve my self image other than losing weight\/exercising. I\u2019m hoping that the improvement in the mental aspect of it will aid my weight loss instead of derailing it.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/175kuuu\/i_feel_so_negative_about_my_appearance_how_do_i\/"
  },
  {
    "title": "Constant state of panic since emdr therapy",
    "text": "I did my first emdr session, where we did a happy memory exercise, and I had an out of body feeling and mental breakdown during the therapy. It\u2019s been 7 days, and I\u2019ve been in a constant state of panic. It\u2019s hard for me to eat, sleep, or do anything. I\u2019m only able to get a couple hours of sleep per night. I\u2019ve been having bad dissociation and feel like nothing is real. As much as I probably need to be on a powerful anxiety med, I have phobias surrounding taking sedatives or meds that make you drowsy. I\u2019ve tried every grounding exercise and breathing technique, but nothing has worked so far. I want to go to a mental health facility, but I don\u2019t wanna be locked up and sedated. I\u2019m on 20 mg of lexapro, and my doctor is gonna switch me to viibryd and deplin, but those take at least a week to feel effects, and I need to feel relieved now.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/175d8cb\/constant_state_of_panic_since_emdr_therapy\/"
  },
  {
    "title": "Comfort",
    "text": "I (28M) don\u2019t know where to go or what to do when I need comfort, especially when my partner either cannot or will not provide it. I simply do not have the tools to properly self-soothe without being self destructive in one way or another. I can\u2019t trust either of my parents or any of my siblings to actually provide comfort I need. All of the people I used to consider close friends that I could go to when I was hurting have all gone off and moved on to bigger and better things or have distanced themselves as they\u2019ve watched me struggle. And those that have stuck around, I have no idea if I can trust them to not leave if I let them know how bad it\u2019s really gotten. I feel paralyzed and I\u2019m not sure how much more I can take.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/1720882\/comfort\/"
  },
  {
    "title": "An apology to Men on behalf of psychotherapists",
    "text": "Men who seek mental health support deserve therapists who can empathize with them, and understand their needs. Unfortunately, that's not always what they get. \n\nMen often find themselves with therapists who aren't aware of their own anti-male biases, who think it's cool to denigrate men for how they deal with their emotions, or who don't know that men often need an approach that's different from the approach that women need.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/171bw77\/an_apology_to_men_on_behalf_of_psychotherapists\/"
  },
  {
    "title": "Im done with Woman",
    "text": "So today was the last straw. I was chatting with a girl and everything was going well. we were chatting, i was flirting and she was flirting back. I seriously thought that i finally found a girl who truly wanted the same thing i want. For the record, im not looking for sex or anything like that. I don't date for that. And out of nowhere she blocks me. The last thing i asked was, \"What are you looking for in a man?\". and that was the moment her profile picture disappeared, and i realised that she is the same as all the others. Blocking me out of nowhere. If you don't want to talk to me that's fine. But at least say it to me. That would prevent a lot of pain. So i'm done, i can't do it anymore!",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/171o3zk\/im_done_with_woman\/"
  },
  {
    "title": "Post SSRI sexual dysfunction (PSSD) has ruined my life for the last 4 years :(.",
    "text": "\nI\u2019m a 28 year old guy and I got PSSD from taking an SSRI antidepressant back in 2019 for only 3 weeks. Ever since, no emotions, lost all of my high sex drive and worst of all zero pleasure or feeling in orgasms. This is miserable!! The PSSD forum is negative so I try to stay away. I\u2019m so numb with no dopamine feeling anymore. Want to end my life because of this permanent condition. What should I do? Tried so many supplements and even prescription Wellbutrin. I\u2019m screwed, no end in sight",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/1700zoz\/post_ssri_sexual_dysfunction_pssd_has_ruined_my\/"
  },
  {
    "title": "Only guy in my mental health program",
    "text": "I\u2019m currently doing a everyday program for mental health. There is around 20 people participating and they are all woman. All the staff are women too. Because most people there are woman, the activities and discussions seem to be more geared toward women stuff.\n\nI hate being the only guy there. My family is very much a \u201cmen don\u2019t cry\u201d type of people so it was kinda big for me to get help. My guy friends don\u2019t discuss mental health either, like most groups of 18\/19 yr old guys.\n\nIdk, I just feel really awkward being there. Like the whole men don\u2019t discuss feelings is being reinforced in my mind.",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/16z7555\/only_guy_in_my_mental_health_program\/"
  },
  {
    "title": "I cant live being a virgin anymore",
    "text": "Everyone I know has sex and it makes me feel like less of an adult, having sex is a requirement to be an adult. \n\nI get extremely jealous knowing everyone else is getting to experience a basic human need apart from me. \n\nI\u2019ve done everything I can to better myself and make myself as attractive as I can but there\u2019s no point. \n\nI\u2019ve accepted all I can do now is kill my self",
    "url": "https:\/\/www.reddit.com\/r\/malementalhealth\/comments\/16yr28s\/i_cant_live_being_a_virgin_anymore\/"
  }
]
function preload() {
  loadTime = new Date().getTime();
  imgs[imageCount] = loadImage("./images/output" + imageCount + ".png");
  document.getElementById("story-title").innerHTML = posts[imageCount].title;
  document.getElementById("story").innerHTML = posts[imageCount].text;

  document.getElementById("wordcloud").style.display = "block";
  if (posts[imageCount].text.length + (posts[imageCount].title.length * 2) > 900) {
    document.getElementById("wordcloud").style.display = "none";
  }

  var wordcloudcount = imageCount % 4 + 1
  document.getElementById("wordcloud-image").src = "./assets/wordcloud" + wordcloudcount + ".png";

}

function windowHeight() {
  return;
}

function setup() {
  if (windowWidth < 600)
    createCanvas(windowWidth, windowWidth);
  else
    createCanvas(800, 800);
  img = createImage(width, height);
  nextImage();
  paint = new Paint(createVector(width / 2, height / 2));
  background(255, 255, 255);
  colorMode(RGB, 255, 255, 255, 255);
  var text = "";
  posts.map((post, index) => {
    text += post.text + " ";
  });
}

function draw() {
  if (!isStop) {
    for (var i = 0; i < subStep; i++) {
      paint.update();
      paint.show(lineCount);
      z += 0.01;
    }
  }
  var currentTime = new Date().getTime();

  if (currentTime - loadTime > 60000) {
    isStop = true;
  }

  if (isStop == true) {
    nextImage();
    isStop = false;
  }
}

function fget(i, j) {
  var index = j * img.width + i;
  index *= 4;
  return color(img.pixels[index], img.pixels[index + 1], img.pixels[index + 2], img.pixels[index + 3]);
}

function fset(i, j, c) {
  var index = j * img.width + i;
  index *= 4;
  img.pixels[index] = red(c);
  img.pixels[index + 1] = green(c);
  img.pixels[index + 2] = blue(c);
  img.pixels[index + 3] = alpha(c);
}

function keyPressed() {
  if (key === 'N')
    nextImage();
  if (key === 's' || key === 'S') {
    isStop = !isStop;
  }
}

function mouseClicked() {
  const wrapper = document.querySelector('.wrapper');
  const body = document.querySelector('body');
  const canvas = document.querySelector('canvas');

  if (body.classList.contains('active')) {
    body.classList.remove('active');
  } else {
    body.classList.add('active');
  }

  if (wrapper.classList.contains('active')) {
    wrapper.classList.remove('active');
  } else {
    wrapper.classList.toggle('transition');
    wrapper.classList.add('active');
  }
  if (canvas.classList.contains('active')) {
    canvas.classList.remove('active');
  } else {
    canvas.classList.add('active');
  }
}

function touchStarted() {
}

function nextImage() {
  if (!img) return;
  imgIndex = (++imgIndex) % imgs.length;
  var targetImg = imgs[imgIndex];
  img.copy(targetImg, 0, 0, targetImg.width, targetImg.height, 0, 0, img.width, img.height);
  img.loadPixels();
  clear();
  background(255, 255, 255);
  imageCount++;
  preload();
  console.log("switching image to: " + imgIndex);
}

const shadow = document.querySelector('.shadow');
document.addEventListener('mousemove', (e) => {
  let x = e.clientX - (document.documentElement.clientWidth * 1.5);
  let y = e.clientY - (document.documentElement.clientHeight * 1.5);
  shadow.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
});