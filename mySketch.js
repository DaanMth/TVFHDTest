var imgs = [];
var imgIndex = -1;
var img;
var paint;
var subStep = 1600;
var z = 0;
var isStop = false;
var lineCount = 0;
imageCount = 0;
textCount = 0;
stopwatch = 0;
var loadTime;
var posts = [
    {
        "title": "Should I just end it all",
        "text": " I\u2019m probably not going to get any women to look at me as anything more than dirt on her shoe even if I do just work on myself and yeah I know there\u2019s more to life than women but like according to any older person I\u2019ve talked to it seems I\u2019ve lived through the best years so like the fucks point for me to keep going I\u2019m mean absolutely nothing now and I\u2019ll probably stay just as worthless for the rest of my I\u2019m just that weird kid that people talk to because they feel bad and my family puts so much time and energy into me and I can\u2019t understand why my sister is way more like to make them proud and amount to something I mean she going to Harvard for fucks sake I don\u2019t even share their last name sence they\u2019re my step family and I\u2019m barely going into community college with no idea with what I\u2019m gonna do with my life at this point my best bet is to eather just give up or just join the military and go die in whatever war they send me off to at least then people could say my life actually ment something \n\n\nTLDR:it\u2019s just me whining and bitching to the internet\n\nI\u2019m probably going to get cooked in the comments anyway ",
        "url": "https://www.reddit.com/r/malementalhealth/comments/191grvw/should_i_just_end_it_all/"
    },
    {
        "title": "This torment has no end. Only new beginnings",
        "text": "I\u2019m an empty void. People acknowledge that I exist. People trust me to do things for them.\nPeople ask me to help them.\n\nYet no matter what I do, no matter how they treat me, it\u2019s never enough to fill the void that is my soul. I just tell myself it\u2019s because I\u2019ve never been loved, and no amount of self actualization changes that. \nBut I have a suspicion that even love won\u2019t fix me. \nBecause I\u2019m broken.\nNot like I\u2019ll ever find out.\n\nI\u2019m damaged goods, no one wants to love that. They\u2019ll pity me. Say \u201coh I\u2019m so sorry\u201d. But then they\u2019ll never talk to me ever again.\n\nBest friends, disappeared, gone, after I opened up to them. \n\n\u201cOh then they weren\u2019t true friends\u201d yeah NO ONE is and no one will be. \nDoesn\u2019t matter how much I help.\nHow much I encourage.\nSupport\nCare for\nMake laugh\nSpend time with\nLove.\n\nPeople can\u2019t love me. \n\n\u201cOh love yourself\u201d\nI try. And I\u2019m genuinely content in my life, but then my brain snaps out of the fever dream and decides it despises the boring basic life I live. It\u2019s why I am writing this.\n\nIdk what I want, actually. I just want to feel like I\u2019m not an invisible void in a world that hates me. \nI don\u2019t want to feel fundamentally broken. Incapable of living in this world",
        "url": "https://www.reddit.com/r/malementalhealth/comments/191c0lz/this_torment_has_no_end_only_new_beginnings/"
    },
    {
        "title": "I hate how invisible I am.",
        "text": "I have worked on myself over the years. I gone to the gym, had my first boxing fight, have my own fashion style, I am a businessman and going to travel all of south East Asia as a digital nomad and been reading a lot. \n\nHowever, I get ignored by women everywhere they don't even look at me or they look down upon me. When I message left on read or just an emoji or cold shoulder. I have had girlfriends in the past and hooked up, but this is the longest I been without anything.\n\nI feel frustrated, defeated and just sad like what is so funking wrong with me that I am jot worth even loving? I can take all over the world and live an extraordinary life but I am overlooked like I am trash. I feel it's because I am indian even though born here.\n\nI feel my chest being sore and heart feels like wants to explod as just so fed up with not being enough.",
        "url": "https://www.reddit.com/r/malementalhealth/comments/1902r7y/i_hate_how_invisible_i_am/"
    },
    {
        "title": "Day 43: I got home and went straight to bed. Just like I knew I would....",
        "text": "I thought I could do this. I thought I could be consistent and get everything that I had to do done. It's 20:55 though and I'm still just laying in bed. \n\nI know it's my own fault. I over worked myself. I overdid it with the alcohol. I'm so tired. \n\nI've been feeling lonely and distant from everyone. Maybe the holidays were too much. Maybe I'm just socially and mentally drained. I've been doubting myself.\n\nI've been lying to myself. I wasn't trying to wake up this morning. There I said it, now what? Yesterday morning wasn't an accident either. The scrapes on my knees hurt now but they didn't when I fell. I guess it's that numbness that I've been craving.\n\nI can't help but notice just how empty this house feels tonight. Nobody's here and nobody is coming. I'm pissed about all the things I could have done but haven't. \n\nTomorrow is another day to be someone different though. How long will I keep telling myself that before I actually make a change?",
        "url": "https://www.reddit.com/r/malementalhealth/comments/18zqzte/day_43_i_got_home_and_went_straight_to_bed_just/"
    },
    {
        "title": "Zoloft Day 40/41/42 - new years resolutions? Tell me yours.",
        "text": "I honestly need to change for the better this year. I haven't really sat down and wrote any goals. I'm thinking of doing it when I get off work. I'll probably just go to sleep though because I only got one hour. \nI was so drunk I don't even know how or why I was up so late. \n\nI'm feeling really motivated right now though and I suppose that's how every year starts. I know a new year doesn't really change anything but it's funny how it can switch up your mindset. \n\nI've honestly been doing a lot these past couple days. I'm realizing how much I can do now when I'm not just moping around feeling sorry for myself.\n\n1. I guess for now I really just want to focus on my finances.\n\n2. Getting my drivers license so I can get a car.\n\n3. Being a better person and working on my relationships. \n\n4. Brushing and showering regularly.\n\n5. Finding and focusing more on my hobbies.\n\n6. Continuing to read more. \n\nI'll probably switch up the order because #4 should probably be #1. \ud83d\ude02 It's just some ideas for goals though. I gotta plan the step now to accomplish them, but I feel these will greatly improve my mental health. I plan on taking my pills for a few more months.",
        "url": "https://www.reddit.com/r/malementalhealth/comments/18z2jtf/zoloft_day_404142_new_years_resolutions_tell_me/"
    },
    {
        "title": "i wish people would stop pretending they understand me and pitying me",
        "text": "no, im not shy, im just scared of people in general. im not \"sad all the time\", i just dont know how to feel so i stay expressionless. im not being bullied, i choose to not be included in friend groups and projects because i cant act normally around other people. \n\ni wish they would stop telling me they know how i feel. people always say that. its been years. its never gotten better.\n\n\"you'll definitely make friends this year if you try your best to talk to others and be more vocal\" no, everyone ended up just calling me a \"depressed\" or \"weirdo\", and im not either. trying just made it worse. \n\nand worst of all is how the teachers... pitied me so much. i didnt even talk during my slide presentation, they still gave me a pass. they keep asking me if im ok at home because of how \"introverted\" i am. they always seemed to pity me. i hate school so much.",
        "url": "https://www.reddit.com/r/malementalhealth/comments/18yb1sh/i_wish_people_would_stop_pretending_they/"
    },
    {
        "title": "Zoloft Day 35/36/37/38/39 - 123123",
        "text": "The end is here. I'm alone by choice. The end of the year is always rough. I declined a lot of invites to go out today. I feel like a total piece of shit but I would just be a downer if I went anywhere. It's best that I'm alone. \n\nUnlike everyone else I don't really have anything to celebrate. I peaked in October and then it was just a straight nose dive down. It's like I had hope poured into me again but it didn't matter because there was still a hole in me from before. \n\nThis week has been confusing and very disappointing. The time goes by so quick. I haven't gotten anything done that I wanted to.\n\nI'm probably in the darkest time of my life and I don't think anyone even notices or cares. There's really nothing anyone could do. \n\nLife sucks a lot... \n\nI don't know why I'm like this. I think I'm just not happy with where I am. I'm never happy with where I'm at though. And I don't really even know what I want. I feel trapped I guess. \n\nTrapped by my illnesses. Trapped by my family. Trapped by my job. Trapped by myself. \n\nI just want to feel free without the help of this bottle.",
        "url": "https://www.reddit.com/r/malementalhealth/comments/18vmgv5/zoloft_day_3536373839_123123/"
    },
    {
        "title": "Day 29/30/31/32 on SSRI: Why am I watching so much porn?",
        "text": " I feel so gross. I couldn't even watch porn or masturbate a month ago but lately I've just been so down. I still don't even feel like watching porn or masturbating but I just feel so empty, so alone.  \n\n\nI've been getting to work and it's straight to watching porn. I get home from work and I watch porn and jerk off in the shower. I go to my other job and watch porn. I get home and watch porn before going to sleep... I'll be so tired too.  \n\n\nI still don't even wanna watch porn or jerk off but I just want to feel something. What's worse is I need to be completely fucked up if I'm gonna jerk off.  \n\n\nI guess it's that time of year where everyone seems to have somebody... And then there's me... The one who's always alone.  \n\n\nI get it, I suck, there's nothing special about me. Why would anyone wanna to be with me?   \n\n\nI'm always such a mess. I don't deserve anybody. I'll never be stable enough to keep anyone around. I'm too boring and I'm weird. ",
        "url": "https://www.reddit.com/r/malementalhealth/comments/18pc1rn/day_29303132_on_ssri_why_am_i_watching_so_much/"
    },
    {
        "title": "What\u2019s The Point of Doing a Depression Screening If You\u2019re not going to Talk to Me About It",
        "text": "I just went to my general practitioner for some refills.  The nurse decides we need to do a depression screening.  So I have to read all these questions with her and answer how often I\u2019m experiencing certain things.  \n\nI\u2019m shaken up by it a bit, it\u2019s not easy to acknowledge out loud how I\u2019m feeling. I was honest and my answers were worse than the last time so at least the doctor will talk to me about it more than the other doctor did before.  \n\nNope, not at all.  She went through my meds, ordered all my refills, and reminded me that I should exercise to help my blood pressure.   She was actually better than my regular doctor.  \n\nBut what\u2019s the point of dredging all this up to the surface if they\u2019re not even going to talk to me about it.   Now I\u2019m sitting here trying not to cry into my soup in the middle of this diner.",
        "url": "https://www.reddit.com/r/malementalhealth/comments/18nszh1/whats_the_point_of_doing_a_depression_screening/"
    },
    {
        "title": "Tell me why being a virgin is my fault.",
        "text": "\n18m ugly short and autistic, never had a dad to teach me how to be a man and grew up in an incredibly abusive hysterical household with a mum and two sisters who need inpatient mental health care but are yet to receive it. \n\nI\u2019ve had terrible social anxiety and awareness my entire life. I\u2019ve been to therapy, I eat healthy and workout, I push myself constantly which is mental torture to be around new people all the time because people like to pretend that\u2019ll work. I put the effort in to look the best I can. \n\nNone of it matters, none of it works and I\u2019ll be alone forever. But everyone always claims it\u2019s the man\u2019s fault he\u2019s a virgin. Please tell me what part of this was my doing. What more can I do? I\u2019ve dedicated my life to this and gotten nothing. \n\nIf nothing changes soon I\u2019m going to end it all. I have everything ready to go, was already hospitalised for an attempt over the summer.",
        "url": "https://www.reddit.com/r/malementalhealth/comments/18jiucm/tell_me_why_being_a_virgin_is_my_fault/"
    },
    {
        "title": "Just another vent post",
        "text": "After months of counseling and dozens of medications life has only gotten worse.\n\nI have now managed to rack up thousands in medical bills and a lot of debt.  I am basically behind on everything with no hope of recovering.\n\nMy depression has been so bad I have lost all my customers and jobs.  Which in turn feeds my depression. So it is a vicous cycle.  The more I try to get help the worse my situation gets.\n\nThe doctors want to commit me now, which in turn only makes my situation worse.  The argument of \"but you will get the help you need\" doesn't account for the fact that it also will ruin my life more with crippling debt.  Who is going to pay for it all?  Surely not the doctors and counselors.  They only take my money every week.\n\nI am to the point that I hope and pray everyday for me to be taken out by a bus, truck, or anything that will pay my family.  But no one in my life understands, and no amount or type of medication can fix this.\n\nI am done with life but unfortunately life still enjoys kicking me while I am down, amd beating me way past submission.",
        "url": "https://www.reddit.com/r/malementalhealth/comments/18ib60n/just_another_vent_post/"
    },
    {
        "title": "A portrait of a man",
        "text": "/Felt like writing a poem. /\n\n\n\n\n\n\n\nHe must always be there \n\nBe unchanged, just for the better \n\n\nIt's important, difficult, unnecessary, trivial \n\nHis eyes are shifting, tired, attentive \n\nEmpty \n\nShe is his prey, the center of the universe\n\n\n He will give her everything, nothing, a house with a garden\n\n\n Heartless, but he hid his loved ones deep inside\n\n \nCold volcano of passion \n\nStrong but fragile \n\nQuiet but talkative\n\nMysterious, you read him like an open book\n\nHe doesn't know what love is, he died for his loved ones \n\nHe doesn't remember, he hasn't forgotten \n\nHe doesn't know what the spoon is for, he'll prepare a feast\n\nMature, as usual, mature, still mature\n\nHe climbed a mountain made of his own pain \n\nHe filled his own corner with real and pipe dreams \n\nA wood saw, a bandage and bitter coffee\n\n\nIs he still working or has he had enough sleep? \n\nLater, tomorrow, someday.\n\nEither he loves her or he is toying with her \n\nFor good, not good \n\n\nAnd for God's sake",
        "url": "https://www.reddit.com/r/malementalhealth/comments/18g7o4f/a_portrait_of_a_man/"
    },
    {
        "title": "Why even try if everything gets worse",
        "text": "Like the title says, for the past two years its just been tragedy after tragedy. I lost my apartment due to a relationship issue. Terrible toxic relationship where I would move in and out a couple times. Right now I am at my parents with no room or anything. I had to drop a class because my mental health is so poor this semester and it sucks because school was keeping me going. I am so tired, I can't be happy and I can't even cry even though I feel them coming. I am just so numb, I hate that i've been sad for more than half my life. I started taking meds at 11 or so. I am surprised I haven't killed myself yet and of course the bad people get rewarded as well. I've lost a couple jobs because of shitty bosses. I am so thankful I have a job rn and it's looking good bc management is actually nice but otherwise I have nothing to do outside of work and school. I am a loner, nobody to talk to because my parents are not the approachable type. I wish I had friends. I envy the people I see walk into my cafe that have people that care about them whether that be friends, a couple, family. I wish I had good things happen to me. I wish I still had hobbies. I wish I was okay. ",
        "url": "https://www.reddit.com/r/malementalhealth/comments/18gapc8/why_even_try_if_everything_gets_worse/"
    },
    {
        "title": "I'm scared, and even though I have everything I feel I deserve nothing.",
        "text": "I'm sick of pretending I have value outside of my abilities, half of me tells me I'm unworthy, while the other half tears me in the other direction.\n\nI have so many blessings, a fiancee who loves me, a future, a decent blue collar job, family, etc. but I feel this self destructive desire for hatred and loss. \n\nI think about suicide, but I'm too much of a coward to do anything. Am I suicidal? Probably not, more likely a selfish dick who wants attention I don't even know anymore. I have this hanging hunger for misery but I don't want to damage those around me anymore than I already have. I don't know what's worse, sticking around being a burden, or leaving them to deal with the aftermath of I leave.\n\nThere are so many people who deserve the oxygen I'm breathing more than I do. I don't know what I am anymore. Damaged, proud and stuck up, sick in the head, or just fucked up all around. I'm sorry, I just don't know what to do anymore.",
        "url": "https://www.reddit.com/r/malementalhealth/comments/18clk06/im_scared_and_even_though_i_have_everything_i/"
    },
    {
        "title": "Day 12/13/14 on SSRI - I've had more motivation than usual. I've been fucking up though. I feel doomed to be alone.",
        "text": "Everyday is still a struggle but I actually got a lot done around the house and I've been feeling good about that. I definitely notice some motivation. \n\nI've been told I look like shit a lot this week. And honestly I see it too. I haven't been sleeping. \n\nI almost died last night and I don't think I'm even exaggerating. I drank way too much. \n\nI drank because I was having a panic attack. I then proceeded to ruin like 5 relationships from my drunken high stupidity. I need to get sober I see that now, but it always starts right over. \n\nI feel doomed to be alone because I just can't ever find the time to work on myself or a relationship. All I know is self sabotage. I can't believe how fucked up I got in front of the ones I care about.\n\nI'm manic AF rn and I don't know what's going on. Idk if it's the pills, the alcohol, or just my mental illness. So I don't know if I'm truly getting better.",
        "url": "https://www.reddit.com/r/malementalhealth/comments/18bmy70/day_121314_on_ssri_ive_had_more_motivation_than/"
    },
    {
        "title": "Im the guy she looks for if the room was empty, while she\u2019s the girl I\u2019d look for in a full room.",
        "text": "Quick context: met a year ago, shared same values and mindset, we secretly fell for each other without confessing, but we both know it\u2019s true. Texted each other every single day on almost everything. I\u2019m a difficulty to know friend, but she broke that barrier and knows me the most, she can tell what\u2019s up with me just from my expressions. She\u2019s always the one to check up on me, and I make sure I do too. We share notes and whatnot.\n\nLately, her attitude towards me changed. Taking longer to reply, sometimes till the next day, seldom shares ig reels anymore, and puts fewer effort to meet. The topics changed, the sincerity changed. And sometimes she makes me feel like I\u2019m the just the other guy, such that if friend X or Z were around, she would choose to talk with them over me. She rarely shares what she up to anymore, and is like distancing herself from me.\n\nIdk man, it hurts. I loved her so much. And probably the most I will ever love. My body chills every time I read her name in my notifications center, and seeing her drift away is killing me slowly.",
        "url": "https://www.reddit.com/r/malementalhealth/comments/18b9w28/im_the_guy_she_looks_for_if_the_room_was_empty/"
    },
    {
        "title": "Day 10/11 on antidepressants: Had a pretty bad panic attack today.",
        "text": "I blame my OCD. Sometimes I have these episodes where I start to think I'm somebody I'm not. Idk if that even makes sense, I probably sound crazy, it is crazy. Iykyk how it is. \n\nAnyways that happened and I wondered if maybe it was the antidepressants because it was close to my dosage time. I can't be too sure though, but I'll keep taking them and keep an eye on it.\n\nAfter work I picked up a sandwich omw home and after that I passed out. The plan was to eat and then go to the liquor store. I planned on drinking tonight until I felt something. I suppose I still am but I wanted something a little stronger. \n\nIt's not the only reason why I wanted to go to the liquor store. There was somebody I wanted to see on the way there. It didn't happen though and maybe I just need to be more open or maybe I'm just not ready to let anyone in. \n\nI looked at my sleeping habits for the last two months. Every month my Fitbit makes me a report. I haven't really been sleeping as much as I used to. I feel like that may be contributing a lot to my mental well-being, but I'm not quite sure how to fix it.\n\nI bought a lot of books today as well. Hopefully once I get some more work done on my house I'll have the time to read them. I got them all on sale though so I feel good about that.",
        "url": "https://www.reddit.com/r/malementalhealth/comments/188y690/day_1011_on_antidepressants_had_a_pretty_bad/"
    },
    {
        "title": "Antidepressants Day 2: yuh I'm fucked up..",
        "text": "It was rough. Got praised again at work . I ask myself if it really even means anything to me. I don't think it does. And if I'm not perfect, then your praise means nothing. \n\nI really do try my best, but to me it feels like nothing. Anyways I don't wanna bring my work home. I'm gonna try harder tomorrow.\n\nI was actually pretty down today. About what? I don't really know. I Just didn't feel good about myself. I miss her. \n\nI still got some bullshit to deal with. I bought myself a couple Christmas presents I'm looking forward too. I received two today. I'm pretty happy with them. I really know what I wanted this year. It shows I care about myself lol. \n\nUghghghhh. ...  I went out to dinner tonight. I finished all of it! I feel sick about myself. It wasn't really that great of food.\n\nI'd have preferred the other restaurant but when I arrived the sign said, \"closed. Out of business\".\n\nA other person's dreams crushed is really all I saw... \n\nThen I came home and finished off this bottle of whiskey. \n\nI'm jamming rn. Got my music blasting before I drift off and wake up to face another day. \ud83d\ude01\ud83d\ude01\n\nThanks giving us coming up. Ik for aot of us tomorrow is our last work day! What's your plans????????",
        "url": "https://www.reddit.com/r/malementalhealth/comments/1810snr/antidepressants_day_2_yuh_im_fucked_up/"
    },
    {
        "title": "I can't take flat affect anymore",
        "text": "Not having my emotions is destroying me. I've become a robot whose agony is slightly supressed by the sertraline which have upped in dose. Because i cant feel my emotions, i cant feel music, my one true joy on the planet. It just sounds like additional noise stimuli, not music anymore. I just want music back. Is it because i had a year long psychosis that progressed to schizophrenia and im just dealing with the aftermath of that? Is it because flat affect is something you can't remove from schizophrenia? Is it because of the bad reaction i had to the invega shots first time round? (Thats when it all started to be fair) i just want my feelings back and i won't rest until i get my emotions back. I will find a way, im hoping this is temporary, ive been doing good so far, I'm going to the gym, eating healthy, seeing friends, my positive symptoms have lessened greatly. Maybe i should just ask to lessen the dose once i gey changed to abilify. Just hoping one little nudge of the meds is all it takes. Hope my psychotic episode last summer was a one off. I think it could be- i had a lot of stress at the time. Pray to the higher powers. Rant over",
        "url": "https://www.reddit.com/r/malementalhealth/comments/17yjpg7/i_cant_take_flat_affect_anymore/"
    },
    {
        "title": "Tired of pretending to people all the time I don't care.",
        "text": "Vent/seeking guidance\n\nThat's all I seem to be anymore is just a useful pawn for people. No one cares, and the older I get it I just find it more and more evident, that people don't actually care. They say that they care, but in truth they don't, they just say that they need to say in the moment to get them out of hot water. I stop and think, and I have basically no one looking out for me right now. One relative I used to know is in prison now, and hopefully gets out soon. But no one cares, I'm invalidated everywhere and everyone and told that other people have it worse and that I should feel bad for them, or that I need to suck it up. I'm tired of running and pretending that it doesn't hurt. But people just don't even care. There's people that have it much better off than me, and they have people feel sympathy for them. Sympathy for someone else and other people, and I can hardly get any sympathy from one single person alone that isn't a counselor or psychiatrist.",
        "url": "https://www.reddit.com/r/malementalhealth/comments/17x51ye/tired_of_pretending_to_people_all_the_time_i_dont/"
    },
    {
        "title": "She's married now...",
        "text": "I met someone too, but just like you I can be a ghost too. It's okay though, I have Evan here with me. \n\nI can relate to you too. You wouldn't believe how terrified I was when the doc said, \"instant death\". Isn't that everything I asked for though? I guess I got what asked for.\n\nDid I not ask for you as well? Maybe I didn't want you enough.\n\nI know you're still a good person though and you deserve everything you have. I had that $5k . I still ask myself why I didn't even put in $420.\n\nI said I wanted to help more people but really I was just trying to help myself. I really hope you made it to Arizona though. \n\nI wish you happiness. I see that smile, the same one you gave me. I'm just glad Evans still here. \n\nI wish many more years for the both of us.  I'm not in the best place rn but I have hope it gets better soon.",
        "url": "https://www.reddit.com/r/malementalhealth/comments/17widbf/shes_married_now/"
    },
    {
        "title": "Dating apps (tinder & hinge) has absolutely destroyed any sense of self worth and made me completely suicidal.",
        "text": "title says it all really. I've always been quiet shy, never had any attention from opposite sex growing up, I know I'm ugly but never truly understood it's this bad.\n\nThe experience of trying to put myself out there for the first time ever was a disaster. I had one match and her reply was \ud83e\udd22 then unmatched me.  I guess her friend matched me for a prank.\n\nNo likes, nothing else. Not a single message about anything, I have achieved a decent amount in my 24 years alive, masters degree, chess and pool championships, I make average money for my age around $50k, came from poverty but the worst is my looks. \n\nand no I'm not expecting to be a model and have any woman I want, I like the idea of someone genuinely liking my company, and I enjoy theirs, that's it. \n\nThe requirements are like a never ending Stairmaster. I suppose my genetics deserve this, they deserve to die out because of how bad they are. \n\nI've decided getting wealthy is my goal but this isn't to get women. It's so I can enjoy at least a few things in life like supercars, jet skiing and travel. If it doesn't happen by 30 then I will be exiting life.",
        "url": "https://www.reddit.com/r/malementalhealth/comments/17ulb0p/dating_apps_tinder_hinge_has_absolutely_destroyed/"
    },
    {
        "title": "Discussion with my mother",
        "text": "This morning, on my weekly call to my mom (I live 2000 miles away) she asked me about anything new in my lifei told her about Norah Vincent'sbook \"Self-Made Man\" that I started reading the other day. After giving her a brief rundown of the book and a little about the author we got yo talking about the disposablity of men in today's society. She told me how much she supported men's rights and hated how society views men. I don't remember what I said exactly, but her response was that women have it just as bad if not worse. I described some things I dealt with when married to my ex-wife and explained that I had absolutely zero resources and no support in place simply because I have a Y chromosome and even tossed back her words and how I never said anything about women having it easy, but she quickly threw in my face that they did the moment I expressed facing difficulty. \n\nI font know what I'm looking for here, I think I needed to just get that off my chest.\n\nThanks for listening.",
        "url": "https://www.reddit.com/r/malementalhealth/comments/17tx3ve/discussion_with_my_mother/"
    },
    {
        "title": "Anyone else have it the worst out of their friends/family?",
        "text": "They say comparison is the killer of happiness, but goddammit is it hard not to when it comes to the people you spend the most time around.\n\nI\u2019m not gonna sugarcoat it, my life from birth to now has been hell. This post would be a novel if I got into the specifics. My friends and family have had some shit go on in their lives too, but seemingly not to the merciless degree I have. They haven\u2019t gone through the financial struggle, abusive childhood, and many of the specific shit I\u2019ve had to endure\u2026 and I don\u2019t want them to. It just sucks feeling like the \u201cunlucky fuck\u201d of my circles and feeling alone in this bullshit.\n\nLike I\u2019m the one God decided to make an example of to my friends that \u201cremember guys, your lives might be hard but at least you\u2019re not *insert my name*\u201d. I wanna be happy for my friends when they succeed but lately it\u2019s been hard internally. While I was going through the hell this year with my parents, car, home, and ofc girl problems my close friend was having a threesomes with women enjoying life\u2026 and he wouldn\u2019t stop FUCKING BRAGGING ABOUT IT!\n\nI truly feel cursed. I really do.",
        "url": "https://www.reddit.com/r/malementalhealth/comments/17pigzo/anyone_else_have_it_the_worst_out_of_their/"
    },
    {
        "title": "Being a man with low self esteem is awful.",
        "text": "I had a neglectful family. Parents who didn't love each other. An abusive father. Bullied at school. Dad shouted at me when he found out I was getting bullied so I just hid it. As time went on, I just became better at hiding it. I would become over confident in my personality and sometimes a bully. But it just gets worse and worse. As I go deeper into adulthood I see the myriad of ways that it ruins my mental health. I struggle to stand up to myself which leads to further trauma. I am terminally depressed about not finding a partner but too shy and beaten to attract anyone. Life just seems completely empty and hopeless and I don't see the point in anything. No matter what I accomplish, it's never enough. \n\nI've sculpted my body to the point where people comment on it. I've taught myself several languages. I go to therapy and I've got a good career. I've got a good career. But I can't pull myself out of this. I don't have the resources to fix myself. I was never shown love as a child. I can't pull it out of nowhere and love myself now. I've reached such a low point I have no idea what to do. ",
        "url": "https://www.reddit.com/r/malementalhealth/comments/17iav40/being_a_man_with_low_self_esteem_is_awful/"
    },
    {
        "title": "Y\u2019all ever feel like if God exists he hates you?",
        "text": "Like for some odd reason he made you just to suffer as his twisted little entertainment? Like anytime something seemingly good happens in your life he quickly intervenes to make sure that shit doesn\u2019t happen? Like your only purpose is to suffer for him to get a cheap laugh at your expense then die.\n\nThing is I don\u2019t feel like I\u2019m being hyperbolic anymore, I\u2019m starting to genuinely believe this is the case. Everyone goes through stuff, but I\u2019ve been getting hit mercilessly back to back to back this year, really my whole life but this year especially. The kind of bad luck you\u2019d see on cartoons, the kind where if you told people about it they\u2019d think you were exaggerating.\n\nEvery time once I feel like I\u2019m over a hurdle another very serious problem immediately follows. I think suicide is a legit solution in cases like these, your life is already written and is sure to be as fucked up as it\u2019s been so why not. Then again with my luck I\u2019d somehow survive and live out the rest of my days paralyzed. Fuck existing honestly.",
        "url": "https://www.reddit.com/r/malementalhealth/comments/17dzcmy/yall_ever_feel_like_if_god_exists_he_hates_you/"
    },
    {
        "title": "I feel like I\u2019m slowly growing into an angry bitter person",
        "text": "I\u2019ve withstood a lot of bullshit in my life from childhood to adulthood and usually I\u2019m able to smile it away and distract myself with some form of silly entertainment. Recently my anger had started to slowly build over time as more and more obstacles keep getting recklessly thrown at me left and right. This year especially (for anyone that\u2019s read my other posts here) has really tested my fucking patience and sanity. Never ending bullshit after bullshit after fucking bullshit with no sign of a goddamn break.\n\nAt work I feel like I\u2019m one shitty customer away from a potential assault charge. It\u2019s gotten to the point where I\u2019m almost anticipating someone fuck with me so I can let all these years of anger and problems out. There\u2019s times I just wanna scream in my car and bash the wheel but that would be another problem added to my fucked up car rn. I wish my luck and fate was personified so I can actually fucking hurt it for all the shit I\u2019ve had to go through.\n\nI hate everything and everyone. Fuck this year and fuck my life.",
        "url": "https://www.reddit.com/r/malementalhealth/comments/17105xq/i_feel_like_im_slowly_growing_into_an_angry/"
    },
    {
        "title": "Sick of being stuck between not wanting to live and not wanting to die either",
        "text": "Wish I just hadn't existed to begin with, I don't want to be alive, I don't want to die, I don't want to do anything, I hate everything, I'm bad at everything, I hate the body I was born in, I hate being alone and I can't stand being around people, I want this world to go away, I want to disappear. It feels like I'm slowly going insane, I'm losing my mind, been having more outbursts than usual and scratching myself more than usual to the point I have marks all over my neck and face, and chest, and elsewhere most days, the sounds people make every fucking day are driving me mad, I can't even look at other people without being so utterly envious I want to immediately stab myself, I can't go into public without getting anxious, I can't show my face, I don't understand how to interact with others, what the fuck does this world want from me, why the fuck did it make me, fuck you. It feels like people just hate me for some fucking reason and are just waiting for each of my unending fuck-ups so they could make fun of me, it feels like I'm constantly spied on, like my thoughts are getting broadcasted and everyone's making fun of me for what a fucking loser I am, like it's my fucking fault, I didn't fucking choose to be born, go fuck yourselves, I fucking hate you, fuck you, go die.",
        "url": "https://www.reddit.com/r/malementalhealth/comments/16zsu2s/sick_of_being_stuck_between_not_wanting_to_live/"
    },
    {
        "title": "Worst month of my life",
        "text": "So this has been the absolute worst month of my life.  My PSA levels have been trending up, so they did a biopsy.   Yeah, I have stage 1 prostate cancer. Gleason 3+3.   But the biopsy itself has screwed up my \"equipment\".   Climaxes just peter out.   Treatment?  We're just gonna monitor it until it moves to stage 2 or 3.  Next, I have two spots removed off my back.  Yep.  Skin cancer.  So I go back in a few weeks for a full body evaluation. \n\nSo where is my support group?  I'm glad you asked.   You see, my wife is fighting stage 4 breast cancer.  Since 2015.  I'm supposed to be her support.  And right now her blood work is all out of whack.  Her scans are clean, but cancer markers are through the roof.  Her oncologist is baffled and concerned.  So we're dealing with that, and get hit with my health issues. \n\nAnd yesterday, after another failed attempt at intimacy,  while discussing the possible reasons, I get told I don't really have cancer, because I'm not going through chemo or radiation  treatment yet.  Really?  SMDH.  FML.",
        "url": "https://www.reddit.com/r/malementalhealth/comments/16yu3uj/worst_month_of_my_life/"
    },
    {
        "title": "I haven't felt well in years",
        "text": "So far my life has been total hell. I have struggled so much through so much trauma and in my thoughts I hide it with seeing my self as an adult in a child's body. I have lived so trashy. I sleep on a damn couch. School is draining my sanity every day.\n\nSo many people tell me I have it easy. So many people think of me as tough. But in reality I am a sensitive child with anger issues. Yeah I do exercise with my father but that doesn't change shit about my life.\n\nI don't know why or how but for some damn fucking reason I have not been sent into a psych ward yet. For some fucking reason I am still in this same fucking house sleeping on that same fucking couch in the same school, in the same routine, in the same sleep cycles, in the same shit.\n\nI would rather be homeless than spend another fucking day in this shithole you call a \"life\". It is not even a life, it's just existence. I just want to smoke a  damn fucking joint and take a fucking break but I have never even touched a single gram of weed in my life. \n\nIf I ever wind up 6 feet deep you can bet it was by my own terms. I am so fucking tired.",
        "url": "https://www.reddit.com/r/malementalhealth/comments/16yyyou/i_havent_felt_well_in_years/"
    }
];


function preload() {
    loadTime = new Date().getTime();
    imgs[imageCount] = loadImage("./images/output" + imageCount + ".png");
    document.getElementById("story-title").innerHTML = posts[textCount].title;

    splitAndDisplayText(posts[textCount].text); // Split text based on 800 characters

}

function filterEmojis(text) {
    // Define a regular expression to match emoji characters
    var emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\p{Emoji_Presentation}|\p{Emoji}\uFE0F/gu;

    // Remove emojis from the text
    var textWithoutEmojis = text.replace(emojiRegex, '');

    return textWithoutEmojis;
}

function splitAndDisplayText(text) {
    // Filter out emojis from the text
    var textWithoutEmojis = filterEmojis(text);

    var charCount = textWithoutEmojis.length;
    var splitIndex = Math.floor(charCount / 2);

    // Find the last space before the calculated splitIndex
    while (textWithoutEmojis[splitIndex] !== ' ' && splitIndex > 0) {
        splitIndex--;
    }

    var part1 = textWithoutEmojis.substring(0, splitIndex);
    var part2 = textWithoutEmojis.substring(splitIndex);

    // Display parts in separate divs or adjust as needed
    document.getElementById("story1").innerHTML = part1;
    document.getElementById("story2").innerHTML = part2;
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
        wrapper.classList.add('active');
    }
}

function touchStarted() {
}

let prevImgIndex = -1;

function nextImage() {
    if (!img) return;

    document.body.classList.remove('img-' + prevImgIndex)
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * 8) + 1;
    } while (randomIndex === prevImgIndex);

    document.body.classList.add('img-' + randomIndex);
    prevImgIndex = randomIndex;

    imgIndex = (++imgIndex) % imgs.length;
    var targetImg = imgs[imgIndex];
    img.copy(targetImg, 0, 0, targetImg.width, targetImg.height, 0, 0, img.width, img.height);
    img.loadPixels();
    clear();
    preload();
    background(255, 255, 255)
    imageCount++;
    textCount++;
    if (textCount > 29) {
        textCount = 0;
    }
    console.log("switching image to: " + imgIndex);
}

const shadow = document.querySelector('.shadow');
document.addEventListener('mousemove', (e) => {
    let x = e.clientX - (document.documentElement.clientWidth * 1.5);
    let y = e.clientY - (document.documentElement.clientHeight * 1.5);
    shadow.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
});
