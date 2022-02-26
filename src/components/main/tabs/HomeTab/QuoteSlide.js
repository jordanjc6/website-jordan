import quotationMark from '../../../../assets/left-quote.png';
import { styles } from "./style.QuoteSlide.css";

export const QuoteSlide = {
    data() {
        return {
            quotationMark: quotationMark,
            currentIndex: 0,
            quotes: [
                { 
                    text: `For the fear of death is indeed the pretense of wisdom.`,
                    author: 'Plato' 
                },
                { 
                    text: `
                        I am not going to argue for my own sake, as you may think, 
                        but for yours, that you may not sin against the God by condemning 
                        me, who am his gift to you.`,
                    author: 'Plato' 
                },
                { 
                    text: `
                        For not caring about that for which they ought to care, 
                        and thinking that they are something when they are really 
                        nothing.`,
                    author: 'Plato' 
                },
                { 
                    text: `
                        The hour of departure has arrived, and we go our seperate 
                        ways-I to die, and you to live. Which is better God only knows.`,
                    author: 'Plato' 
                },
                { 
                    text: `
                        Moreover, to endure labour; nor to need many things; when I 
                        have anything to do, to do it myself rather than by others; 
                        not to meddle with many businesses; and not easily to
                        admit of any slander.`,
                    author: 'Marcus Aurelius' 
                },
                { 
                    text: `
                        That I never by way of ostentation did affect to show 
                        myself an active able man, for any kind of bodily exercises.`,
                    author: 'Marcus Aurelius' 
                },
                { 
                    text: `
                        To be easy and ready to be reconciled, and well pleased again 
                        with them that had offended me, as soon as any of them would be 
                        content to seek unto me again.`,
                    author: 'Marcus Aurelius' 
                },
                { 
                    text: `
                        True liberty, and unvariable steadfastness, and not to regard
                        anything at all, though never so little, but right and reason:
                        and always, whether in the sharpest pains ... to be still the same man.`,
                    author: 'Marcus Aurelius' 
                },
                { 
                    text: `
                        A man without ever the least appearance of anger, or any other passion;
                        able at the same time most exactly to observe the Stoic Apathia, or unpassionateness,
                        and yet to be most tender-hearted.`,
                    author: 'Marcus Aurelius' 
                },
                { 
                    text: `
                        Ever of good credit, and yet almost without any noise, or rumour: very
                        learned and yet making little show.`,
                    author: 'Marcus Aurelius' 
                },
                { 
                    text: `
                        Always to hope the best; and to be confident that my friends love me.`,
                    author: 'Marcus Aurelius' 
                },
                { 
                    text: `
                        Neither absolutely requiring of his friends, that they should wait
                        upon him at his ordinary meals, nor that they should of necessity
                        accompany him on his journeys.`,
                    author: 'Marcus Aurelius' 
                },
                { 
                    text: `
                        His care to preserve his friends; how neither at any time he would
                        carry himself towards them with disdainful neglect ... nor yet at
                        any time to be madly fond of them.`,
                    author: 'Marcus Aurelius' 
                },
                { 
                    text: `
                        Moreover how all acclamations and flattery were repressed by him.`,
                    author: 'Marcus Aurelius' 
                },
                { 
                    text: `
                        Without pride and bragging, yet with all freedom and liberty: so
                        that as he did freely enjoy them without any anxiety or affectation when 
                        they were present; so when absent, he found no want of them.`,
                    author: 'Marcus Aurelius' 
                },
                { 
                    text: `
                        How he was not easily moved and tossed up and down, but loved to be constant,
                        both in the same places and businesses.`,
                    author: 'Marcus Aurelius' 
                },
                { 
                    text: `
                        Never doing anything with such earnestness, and intention, that a man 
                        could say of him, that he did sweat about it.`,
                    author: 'Marcus Aurelius' 
                },
                { 
                    text: `
                        Suffer it not anymore, either to repine at anything now present, or to 
                        fear and fly anything to come, which the destiny hath appointed thee.`,
                    author: 'Marcus Aurelius' 
                },
                { 
                    text: `
                        Somewhere ages and ages ago hence; two roads diverged in a wood, 
                        and I- I took the one less traveled by, and that has made all the 
                        difference.`,
                    author: 'Robert Kiyosaki' 
                },
                { 
                    text: `
                        You'll have lots of friends who really like you because you were such a 
                        nice hardworking guy. But the truth is that you let life push you into 
                        submission. Deep down you were terrified of taking risks. You really
                        wanted to win, but the fear of losing was greater than the excitement 
                        of winning. Deep inside, you and only you will know that you didn't go for it.
                        You chose to play it safe.`,
                    author: 'Robert Kiyosaki' 
                },
                { 
                    text: `
                        If you realize that you're the problem, then you can change yourself,
                        learn something, and grow wiser.`,
                    author: 'Robert Kiyosaki' 
                },
                { 
                    text: `
                        Money only accentuates the cash-flow pattern running in your head.`,
                    author: 'Robert Kiyosaki' 
                },
                { 
                    text: `
                        People are so afraid of losing that they lose.`,
                    author: 'Robert Kiyosaki' 
                },
                { 
                    text: `
                        It's not that he wanted to lose. He just knew who he was and how he would
                        take a loss. He would take a loss and make it a win.`,
                    author: 'Robert Kiyosaki' 
                },
                { 
                    text: `
                        The greatest way to overcome laziness is to gain desire.`,
                    author: 'Robert Kiyosaki' 
                },
                { 
                    text: `
                        Some people stay lazy by staying busy. Rather than getting to the important 
                        task, they find excuses to get busy with unimportant, and less urgent work,
                        that procrastinates.`,
                    author: 'Robert Kiyosaki' 
                },
                { 
                    text: `
                        Our lives are a reflection of our habits more than our education.`,
                    author: 'Robert Kiyosaki' 
                },
                { 
                    text: `
                        Make lots of offers, someone might say yes.`,
                    author: 'Robert Kiyosaki' 
                },
                { 
                    text: `
                        How could you communicate with the future? It was of its nature impossible.
                        Either the future would resemble the present, in which case it would not
                        listen to him: or it would be different from it, and his predicament would
                        be meaningless.`,
                    author: 'George Orwell' 
                },
                { 
                    text: `
                        He was a lonely ghost uttering a truth that nobody would ever hear. But 
                        so long as he uttered it, in some obscure way the continuity was not broken.
                        It was not by making yourself heard but by staying sane that you carried 
                        on the human heritage.`,
                    author: 'George Orwell' 
                },
                { 
                    text: `
                        They could not alter your feelings: for that matter you could not
                        alter them yourself, even if you wanted to. They could lay bare in the
                        utmost detail everything that you had done or said or thought; but the 
                        inner heart, whose workings were mysterious even to yourself, remained
                        impregnable.`,
                    author: 'George Orwell' 
                },
                { 
                    text: `
                        Never, for any reason on earth, could you wish for an increase of pain.
                        Of pain you could wish only one thing: that it should stop. Nothing in the 
                        world was so bad as physical pain. In the face of pain there are no heroes,
                        no heroes, he thought over and over as he writhed on the floor, clutching
                        uselessly at his disabled left arm.`,
                    author: 'George Orwell' 
                },
                { 
                    text: `
                        You believe that reality is something objective, external, existing in its own 
                        right. You also believe that the nature of reality is self-evident. When you
                        delude yourself into thinking that you see something, you assume that everyone else
                        sees the same thing as you. But I tell you, Winston, that reality is not external.
                        Reality exists in the human mind, and nowhere else.`,
                    author: 'George Orwell' 
                },
                { 
                    text: `
                        But the world itself is a speck of dust. And man is tiny-helpless! How
                        long has he been in existence? For millions of years the earth was uninhabited.
                        'Nonsense. the earth is as old as we are, no older. How could it be older? Nothing
                        exists except through human consciousness.'`,
                    author: 'George Orwell' 
                },
                { 
                    text: `
                        You should enjoy the little detours. To the fullest. Because that's where
                        you'll find the things more important than what you want.`,
                    author: 'Yoshihiro Togashi' 
                },
                { 
                    text: `
                        Even in this blurry polaroid, the man in the chapan exuded a sense of self-assuredness,
                        of ease. It was in the way he stood, his feet slightly apart, his arms comfortably
                        crossed on his chest, his head tilted a little toward the sun. Mostly, it was in
                        the way he smiled. Looking at the photo, one might have concluded that this was a man
                        who thought the world had been good to him.`,
                    author: 'Khaled Hosseini' 
                },
                { 
                    text: `
                        Do not pity the dead, Harry. Pity the living, and, above all those who
                        live without love.`,
                    author: 'J.K. Rowling' 
                },
                { 
                    text: `
                        It does not do well to dwell on dreams and forget to live.`,
                    author: 'J.K. Rowling' 
                },
                { 
                    text: `
                        Youth can not know how age thinks and feels. But old men
                        are guilty if they forget what it was to be young.`,
                    author: 'J.K. Rowling' 
                },
                { 
                    text: `
                        Of course it is happening inside your head, Harry, but why
                        on earth should that mean that is is not real?`,
                    author: 'J.K. Rowling' 
                },
                { 
                    text: `
                        The hardest choices require the strongest wills.`,
                    author: 'Christopher Marcus and Stephen McFeely' 
                },
                { 
                    text: `
                        I know what it is like to lose. To feel so desperately that you're right,
                        yet to fail, nonetheless. It's frightening, turns the legs to jelly. I ask 
                        you to what end? Dread it. Run from it. Destiny still arrives all the same.
                        And now it is here. Or should I say, I am.`,
                    author: 'Christopher Marcus and Stephen McFeely' 
                },
                { 
                    text: `
                        Perfectly balanced, as all things should be. I hope they remember you.`,
                    author: 'Christopher Marcus and Stephen McFeely' 
                },
                { 
                    text: `
                        I'm the only one that knows that. At least I'm the only one who has the
                        will to act on it. For a time, you had that same will. As you fought by 
                        my side, daughter.`,
                    author: 'Christopher Marcus and Stephen McFeely' 
                },
                { 
                    text: `
                        A small price to pay for salvation.`,
                    author: 'Christopher Marcus and Stephen McFeely' 
                },
                { 
                    text: `
                        Today I lost more than you could know, but now is no time to mourn.
                        Now, is no time at all.`,
                    author: 'Christopher Marcus and Stephen McFeely' 
                },
                { 
                    text: `
                        As long as there are those who remember what was,
                        there will always be those, that are unable to accept
                        what can be. They will resist.`,
                    author: 'Christopher Marcus and Stephen McFeely' 
                },
                { 
                    text: `
                        I finally rest and watch the sun rise on a grateful universe.`,
                    author: 'Christopher Marcus and Stephen McFeely' 
                },
                { 
                    text: `
                        This foolish plan of God is wiser than the wisest of human plans,
                        and God's weakness is stronger than the greatest of human strength.`,
                    author: 'St. Paul the Apostle' 
                },
                { 
                    text: `
                        Instead, God chose things the world considers foolish in order to shame
                        those who think they are wise. And he chose things that are powerless to shame
                        those who think they are powerful. God chose things counted as nothing at all, 
                        and used them to bring to nothing what the world considers important.`,
                    author: 'St. Paul the Apostle' 
                },
                { 
                    text: `
                        Blessed are those who don't feel guilty for doing something they have decided
                        is right. But if you have doubts about whether or not you should eat something, you
                        are sinning if you go ahead and do it. For you are not following your convictions. If
                        you do anything you believe is not right, you are sinning.`,
                    author: 'St. Paul the Apostle' 
                },
                { 
                    text: `
                        Those who use the things of the world should not become attached to them.
                        For this world as we know it will soon pass away. I want you to be free
                        from the concerns of this life.`,
                    author: 'St. Paul the Apostle' 
                },
                { 
                    text: `
                        If I gave everything I have to the poor and even sacrificed my body, I could
                        boast about it; but if I didn't love others, I would have gained nothing.`,
                    author: 'St. Paul the Apostle' 
                },
                { 
                    text: `
                        How I praise the Lord that you are concerned about me again. I know you have 
                        always been concerned for me, but you didn't have the chance to help me. Not that 
                        I was ever in need, for I have learned to be content with whatever I have. I know
                        how to live on almost nothing or with everything. I have learned the secret of living
                        in every situation, whether it is with a full stomach or empty, with plenty or little.
                        For I can do everything through Christ, who gives me strength.`,
                    author: 'St. Paul the Apostle' 
                },
                { 
                    text: `
                        If we die with him, we will also live with him. If we endure hardship, we will
                        reign with him. If we deny him, he will deny us. If we are unfaithful, he remains
                        faithful, for he cannot deny who he is.`,
                    author: 'St. Paul the Apostle' 
                },
                { 
                    text: `
                        Faith shows the reality of what we hope for; it is the evidence of things
                        we cannot see.`,
                    author: 'St. Paul the Apostle' 
                },
                { 
                    text: `
                        Elves seldom give unguarded advice, for advice is a dangerous gift, even
                        from the wise to the wise, and all courses may run ill.`,
                    author: 'J.R.R. Tolkien' 
                },
                { 
                    text: `
                        Torment in the dark was the danger that I feared, and it did not hold
                        me back. But I would not have come, had I known the danger of light and joy.
                        Now I have taken my worse wound in this parting, even if I were to go this
                        night straight to the Dark Lord.`,
                    author: 'J.R.R. Tolkien' 
                },
                { 
                    text: `
                        Man's position, according to Buddhism, is supreme. Man is his
                        own master, and there is no higher being or power that sits in
                        judgement over his destiny.`,
                    author: 'Walpola Rahula Thero' 
                },
                { 
                    text: `
                        The root of all evil is ignorance and false views. It is an undeniable
                        fact that as long as there is doubt, perplexity, wavering, no progress
                        is possible.`,
                    author: 'Walpola Rahula Thero' 
                },
                { 
                    text: `
                        The question has often been asked: Is Buddhism a religion or a
                        philosophy? It does not matter what you call it. Buddhism remains
                        what it is whatever label you may put on it.`,
                    author: 'Walpola Rahula Thero' 
                },
                { 
                    text: `
                        What's in a name? That which we call a rose, by any other name
                        would smell as sweet.`,
                    author: 'William Shakespeare' 
                },
                { 
                    text: `
                        O bhikkus, even this view, which is so pure and clear, 
                        if you cling to it, if you fondle it, if you treasure it,
                        if you are attached to it, then you do not understand that 
                        the teaching is similar to a raft, which is for crossing over, 
                        and not for getting hold of.`,
                    author: 'Walpola Rahula Thero' 
                },
                { 
                    text: `
                        Mere suffering exists, but no sufferer is found; the deeds are, 
                        but no doer is found`,
                    author: 'Walpola Rahula Thero' 
                },
                { 
                    text: `
                        On the contrary, a true Buddhist is the happiest of beings.
                        He has no fears or anxieties. He is always calm and serene, and
                        cannot be upset or dismayed by changes or calamaties, because he 
                        sees things as they are. The Buddha was never melancholy or gloomy.
                        He was described by his contemporaries as 'ever-smiling'.`,
                    author: 'Walpola Rahula Thero' 
                },
                { 
                    text: `
                        It is this 'thirst', desire, greed, craving, manifesting itself
                        in various ways, that gives rise to all forms of suffering and the
                        continuity of beings.`,
                    author: 'Walpola Rahula Thero' 
                },
                { 
                    text: `
                        The theory of karma is the theory of cause and effect, of action and reaction; it
                        is a natural law, which has nothing to do with the idea of justice or reward and 
                        punishment. Every volitional action produces its effects or results. If a good action
                        produces good effects and a bad action bad effects, it is not justice, or reward,
                        or punishment meted out by anybody or any power sitting in judgement on your action,
                        but this is in virtue of its own nature, its own law.`,
                    author: 'Walpola Rahula Thero' 
                },
                { 
                    text: `
                        Will, volition, desire, thirst to exist, to continue, to become more and more, is a 
                        tremendous force that moves whole lives, whole existences, that even moves 
                        the whole world. This is the greatest force, the greatest energy in the world. 
                        According to Buddhism, this force does not stop with the non-functioning of the body, 
                        which is death; but it continues manifesting itself in another form, producing
                        re-existence which is called rebirth.`,
                    author: 'Walpola Rahula Thero' 
                },
                { 
                    text: `
                        So from the Buddhist point of view, the question of life after death is not a 
                        great mystery, and a Buddhist is never worried about this problem. As long as 
                        there is the 'thirst' to be and to become, the cycle of continuity goes on.
                        It can stop only when its driving force, this 'thirst', is cut off through
                        wisdom which sees Reality, Truth, Nirvana.`,
                    author: 'Walpola Rahula Thero' 
                },
                { 
                    text: `
                        A man is composed of six elements: solidity, fluidity, heat, motion, 
                        space and consciousness. He analyses them and finds that none of them is
                        'mine', or 'me'; or 'my self'. He understands how consciousness appears 
                        and disappears, how pleasant, unpleasant and neutral sensations appear and
                        disappear. Through this knowledge his mind becomes detached. Then he finds
                        within him a pure equanimity, which he can direct towards the attainment of 
                        any high spiritual state, and he knows what thus this pure equanimity will last
                        for a long period.`,
                    author: 'Walpola Rahula Thero' 
                },
                { 
                    text: `
                        As he does not construct or does not will continuity and becoming or annihilation,
                        he does not cling to anything in the world; as he does not cling, he is not anxious; 
                        as he is not anxious, he is completely calmed within.`,
                    author: 'Walpola Rahula Thero' 
                },
                { 
                    text: `
                        According to Buddhism, the Absolute Truth is that there is nothing absolute
                        in the world, that everything is relative, conditioned and impermanent, and that 
                        there is no unchanging, everlasting, absolute substance like Self, Soul, or Atman within 
                        or without.`,
                    author: 'Walpola Rahula Thero' 
                },
                { 
                    text: `
                        Nirvana is neither cause nor effect. It is beyond cause and effect. Truth is not a result 
                        nor an effect. It is not produced like a mystic, spiritual, mental state, such as dhyana 
                        or samadhi. Truth is Nirvana. The only things you can do is to see it, realize it.`,
                    author: 'Walpola Rahula Thero' 
                },
                { 
                    text: `
                        Sariputta once said: 'O friend, Nirvana is happiness! Nirvana is happiness!' Then
                        Udayi asked: 'But, my friend Sariputta, what happiness can it be if there is 
                        no sensation?' Sariputta's reply was highly philosophical and beyond ordinary
                        comprehension: 'That there is no sensation itself is happiness.'`,
                    author: 'Walpola Rahula Thero' 
                },
                { 
                    text: `
                        Two ideas are psychologically deep-rooted in man: self-protection and 
                        self-preservation. For self-protection man has created God, on whom he
                        depends for his own protection, safety and security, just as a child
                        depends on its parent. For self-preservation man has conceived the idea
                        of an immortal Soul or Atman, which will live eternally. In his ignorance 
                        weakness, fear, and desire, man needs these two things to console himself. 
                        Hence he clings to them deeply and fanatically.`,
                    author: 'Walpola Rahula Thero' 
                },
                { 
                    text: `
                        That is to say, that you should live in the present moment, in the present action.
                        This does not mean that you should not think of the past or the future at all. On 
                        the contrary, you think of them in relation to the present moment, the present action, 
                        when and where it is relevant.`,
                    author: 'Walpola Rahula Thero' 
                },
                { 
                    text: `
                        You should forget yourself completely, and lose yourself in what you do. 
                        The moment a speaker becomes self-conscious and thinks 'I am addressing 
                        an audience', his speech is disturbed and his trend of thought broken.`,
                    author: 'Walpola Rahula Thero' 
                },
                { 
                    text: `
                        When you see its nature, how it arises and disappears, your mind grows
                        dispassionate towards that sensation, and becomes detached and free. It is 
                        the same with regard to all sensations or feelings.`,
                    author: 'Walpola Rahula Thero' 
                },
                { 
                    text: `
                        If, as one fares, one does not find a companion who is better or equal,
                        let one resolutely pursue the solitary course; there can be no 
                        fellowship with the fool.`,
                    author: 'Walpola Rahula Thero' 
                },
                { 
                    text: `
                        It is not the critic who counts; not the man who points out how the strong man
                        stumbles, or where the doer of deeds could have done them better. The credit 
                        belongs to the man who is actually in the arena, whose face is marred by dust and
                        sweat and blood; who strives valiantly; who errs, who comes short again and
                        again, because there is no effort without error and shortcoming; but who does 
                        actually strive to do the deeds; who knows great enthusiasms, the great 
                        devotions; who spends himself in a worthy cause; who at the best knows in the end 
                        the trimph of great achievement, and who at the worst, if he fails, at least fails
                        while daring greatly, so that his place shall never be with those cold and timid
                        souls who neither know victory nor defeat.`,
                    author: 'Theodore Roosevelt' 
                }
            ]
        };
    },
    computed: {
        currentText() {
            return this.quotes[this.currentIndex].text;
        },
        currentAuthor() {
            return this.quotes[this.currentIndex].author;
        }
    },
    methods: {
        randomQuote() {
            let randomIndex;

            do {
                randomIndex = Math.floor(Math.random() * ((this.quotes.length - 1) - 0 + 1) + 0);
            } while(randomIndex == this.currentIndex);

            this.currentIndex = randomIndex;
        }
    },
    mounted() {
        this.randomQuote();
    },
    template: `
    <div id="quote-block">
        <div id="quotation-mark" v-bind:style="{ backgroundImage: 'url(' + quotationMark + ')' }"></div>
        <div id="quote-text">
            {{ currentText }}
        </div>
        <div id="quote-author">
            {{ currentAuthor }}
        </div>
        <button id="random-quote-button" @click="randomQuote">
            New Quote
        </button>
    </div>`
};