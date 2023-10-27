---
layout: default
permalink: /reading-club/ReadtheLOD 2023-02-13
---

## Index
1. <a href="#Meta">Meta</a>
1. <a href="#Understanding">Understanding the paper</a>
1. <a href="#Critique">Critique</a>
1. <a href="#Expectations">Meeting expectations</a>
1. <a href="#Application">Applying the Knowledge</a>
1. <a href="#AOB">Any other business</a>


## <a name="Meta">Meta</a>

* 2nd Reading Club gathering of [readthelod](https://readthelod.org/)
* Paper Discussed: [Linked Data Notifications: A Resource-Centric Communication Protocol, Sarven Capadisli et al.](https://link.springer.com/chapter/10.1007/978-3-319-58068-5_33)
* Date: Feb 13th 2023 2pm-5pm
* Location: [ONLINE](todo://add-link)
* Attending Members: Niels Vandekeybus, Geert Limpens, Marc Portier, Joanna Goley, Bram Ulrichts, Özgun Ünver


## <a name="Understanding" >Understanding the Paper</a>

*What parts of the paper are not directly clear / what can use some extra introduction or context to you?*


### Question : Did anyone in this group ever use LDN ? ###
* It is used inside solid --> it has a /Inbox
* Nobody in the room has 


### Question : How many people should this service? ###
* Many inboxes are possible. 


### Question : Ambiguity. ###
* The wide applicability makes it not really clear why and how you can actually use it.
* There seems to be some competition with LDES?
* This could be used for data-replication as well?
* Niels finds it more subtle -- the wide applicability 
* Bram suggests we could be using this for OpenAIS ship updates
* Marc does not agree on the LDES competition --> the main thing about the LDN spec seems to be some reversal of control --> the people declaring the targets are (typically) not the people consuming 


### Sidestep about LDES and Linked Data ###
* LDES low level explanation --> RSS is to a blog as LDES is to a linked-data-system
* What is linked data / RDF a format? RDF is a framework for expressing data, it can be serialized into different formats (JSON-LD, XML, Turtle, n-triples,...)
* Pointers toward learning resources:
    * [Pokémon-based introduction of the concept of linked data](https://pieterheyvaert.com/publications/blogpost_kg_pkmn)
    * [Very extensive courses on Linked Data](https://www.youtube.com/watch?v=ON0wf0SEPx8)
    * [Interesting article on SPARQL with example queries and explanations](https://medium.com/wallscope/constructing-sparql-queries-ca63b8b9ac02)




### Question about ephemeral   ###
* Niels is not on board about the nature of the identifier -- notifications are by nature to be living only shortly
* Niels is not convinced we need persistent identifiers for this -- recomends it should always be a blank node --> we all agree though that the origin (source) of the notification that is linked from it should be unique and not counted twice.


### Question on the Link Header : How would this actually be done? ###
* In the response to the GET/HEAD request to the target 
* It should use the Link header  [rfc8288](https://www.rfc-editor.org/rfc/rfc8288), see [examples](https://www.rfc-editor.org/rfc/rfc8288#section-3.5)
* <s>That only uses known rel="" properties that are registered via [IANA link-relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml)</s>
* Niels suggests hydra is also using this for prev next relations in paging
* Marc makes reference to the usage in signposting.org
* None of us are really clear about how it should actually look like -- we need some actual examples in use to see how it looks like
* (maybe on the dokieli platform?)



### Question on Accept-POST ###

* Never seen it --> [Accept-Post](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Post)
* Allows a response (even a 415 error) to be helpfully suggesting other formats to be used in the POST.

### Question about security ###
* Geert --> There is mentioning of Web-Access-Control spec (which is no longer) But what is this?
* Marc? What do we want to be limiting? Where are the issues?
* Niels --> surely Inbox should not be accepting all messages from anyone
* Niels --> Web-Access-Control spec is more about describing the authorization, but not even about enforcing them. WEB-ID is in this context typically used for the authentication part.
* Marc mentions that just all the web-authentication mechnanism are possibly applied to this. So it does not be a part of the spec itself.
* Marc could there not also be required security on the GETs --> Niels agrees and gives e-health notification that you don´t want to be readable. (even if the notification itself is not really holding content - its origin URL might be revealing something)


## <a name="Critique">Critique</a>

*Any reactions / ammendments / extra suggestions / missed opportunities about the paper?* 

* No real critique
* ActivityPub (i.e. what Mastodon is using) seems to be using this too
* Like the vaste applicability and "space within" of this very elegant and low-requirements introdcuing spec.
* Should we at least leave the serialization open too --> is that really needed to have this guarantee of "consistent interoperability" 
* Niels makes the point that from dev POV knowing that json-ld is there is really useful thing to have (Bram chimes in, also mentioning that json parsers are widely available in all programming languages)
* LDP is also using this constraint -- it seems to be more widely accepted than we thought.


## <a name="Expectations">Meeting expectations</a>

*Who in our group voted to read this paper? Who proposed this?*
*What did we expect and how did the paper live up to that?*


* Little mention of ActivityPub -- it would of have been nice to have some more information on that, but in terms of who depends on who this is not strange at all :)
* Linking to the original is useful --> it has a great "interaction section" which is (a) a very nice example of eating your own dogfood and (b) has really great additional insights (from smart people)
* There might have been just 1-2 more examples that actually made some of the technical details (like usage of linkheaders)  obvious without the need for further exploration --> Geert mentions that the actual w3c recommentation does include those.

* Nice also how this ties back to our previous reading-club --> Section &. Conclusion actuall mentions how LDN can be used as a way to track the growth of the LOD cloud

## <a name="Application">Applied Knowledge</a>

*How could we apply the insights form this paper to our own work / approach / use cases?* 


Brainstorm on possible use cases:
1. build up data and paper citation and usage metrics
2. dokieli platform example --> web of connected acamdemic papers
3. replacing peer-review and centralised research-publishing platforms
4. feedback mechanism platform allowing open-data users to get back to data publishers about (1) usage (2) corrections and qc feedback 
5. Environment Hazards (Flash-flood / Hail Storm / Tsunami) Warnings platform?
6. Missing child / Security / Abduction Alert platform
7. Replace current email-driven notification technologies
8. SOLID -like architectures <-- separation of storage and application platforms need this kind of link-back system to operate



### Taking the environmental hazard case as an application exercise

About what resource are we going to send notifications?

It is about "the environment" --> https://un.org/environmental-hazards/
and under this there could be a hierachical set of geographical (global/eu/be) or topical (weather/hailstorm) resources .

For each of these one could ask for the ldp:Inbox and that then becomes a resource for (a) senders == official and authenticated sources of actual warnings (b) consumers == everybody out there could be reading the contents + specific applications that e.g. send out SMS could be connected too.


Could we turn things around? Would that make sense?  Than this is about all living people having an identifying resource https://people-of-the-earth.org/{identifier}  whith each of those having a specific /Inbox endpoint associated to it --> but this could only work if we have those register themselves onto a publication plpatform (which would be possible through a second layer of notifications to make your registration)


Does this still make for a valid LDN application though?  Are we not in an area where we could be using just a regular LDES feed?

Marc argues we do not LDN if we are organising a monologue --> one stream of data / info coming from one source that just needs to be heard.  LDN really IMHO only makes sense if you want to invite a dialogue: allowing to be notified from other parties to mention / remark / comment / cite usage / suggest corrections on the stuff some originator has been.

Geert pushes this towards making this a basis for a chatting application -- which shows we are pushing the monologue-dialogue idiom beyond the LDN scope even. LDN seems better fitting some weird "one-and-a-half-ologue" -- because none of the replies NEED to have an /Inbox themselves to further the conversation.  So surely not a native match to what we all would consider a "chat"

Niels notes that inside solid there actually is some kind of provisioning for this.
![](https://i.imgur.com/eFyn3TJ.png)


### Taking another case: metrics of usage and citations.

This seems the most straight-forward and direct application fitting the whole LDN idea. 

It would suggest the metadata associated to my paper or dataset (doi) would contain the ldp:Inbox reference

From there we only need to assume that 
(1) everybody does proper citation and usage declarations
(2) we all are using some editing platform that knows about LDN

and the /inbox automatically becomes a natural source from where to collect all information about usage and citations!


The remaining question about where / how many inboxes there are then is subject to other discussion in the area of trust and optimal engineering:

it could .e.g. be
- organized per paper / dataset
- per platform
- per research organization
- or even be an optimized third party (multiple competing ones) that have a tuned and optimised system for collecting these



## <a name="AOB">Other business, next steps</a>

* we need to try out this LDN ourself we believe -> Niels commits to trying this out as soon as the page is published on the readthelod website

* we still do the follwo up email if we don´t hear back from him

### Next club

*any comments suggestions?*

* online doesn´t seem to make it hard for us to have a good discussion
* two real-life sessions a year would be enough (summer in OST / winter in Ghent)
* lets have next one again online
* we should avoid Easter holidays --> so let us try to target after that April 20th for now (online)
