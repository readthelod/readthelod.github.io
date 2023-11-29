---
layout: readingclub
permalink: /reading-club/ReadtheLOD 2023-11-20
title: ReadtheLOD 2023-11-20
---

## Index
1. <a href="#Meta">Meta</a>
1. <a href="#Understanding">Understanding the paper</a>
1. <a href="#Critique">Critique</a>
1. <a href="#Expectations">Meeting expectations</a>
1. <a href="#Application">Applying the Knowledge</a>
1. <a href="#AOB">Any other business</a>

## <a name="Meta">Meta</a>

* 6th Reading Club gathering of [readthelod](https://readthelod.org/)
* Paper Discussed:
* Date: 2023-11-20
* Location: [ONLINE](todo://add-link)
* Attending Members: Joanna Goley, Marc Portier, Geert Limpens, Johan Delauré, Bram Ulrichts


## <a name="Understanding" >Understanding the Paper</a>

### Question (Geert Limpens): How relevant is this?

Why would you want to solve this niche problem with something like semweb technology?


### Question (mpo): Unaware of the many existing vocabs already.

And honestly don´t see where I will have the time soon to delve into them.


### Question (joanna): What is a legal vocabulary.

We read it as refering to a vocabulary that is holding terms that help describe the laws of the land (the lega body) in a machine readable way.
[Vlaamse codex](https://data.vlaanderen.be/doc/applicatieprofiel/vlaamse-codex/)

[ELI](https://eur-lex.europa.eu/eli-register/about.html) 

[EU Vocabularies](https://op.europa.eu/en/web/eu-vocabularies/dataset/-/resource?uri=http://publications.europa.eu/resource/dataset/eli)


### Question (mpo): Really unclear if any of the tools in the visualisation section have any rapport to the KG underpinnings of the rest?

Putting it into this paper suggests there is. But the text does not make that clear?

Geert has the impression the section more refers to how visualisation could be handled, regardless of where it gets its information from (or in which format - semantic or not)




## <a name="Critique">Critique</a>

### Remark (Geert) : Some of the visualisations refered to are old / outdated (even then) - not accessible

Curious about the use cases for such pltaforms in general.

Also approaches the whole consent domain as a monolithic.



### Remark (mpo) : why even consider consent in this granular and bilateral way --> the alternatives data-licensing and own storage + access-control

Paper is not mentioning these alternatives.

Geert remarks rightfully so that the consent can narrow down better to purpose of use -- which is not covered by these more general alternatives (access or licensing)

Plus, we all agree - GDPR has put consent on the table, so it needs to be dealt with



### Remark (mpo):  blockchain usage is not motivated and not questioned

(mpo making side-remarks about the lack of 'double spending problem' which is a honest requirement for validity of blockchain)

Not convinced this use case _needs_ the technology, and the paper is not making the point in my place.

Good though is that they make the remark about the issue of "not being forgotten"



### Remark (johan):  is there anything about "levels of consent"

There is in essence only a basic yes-no outcome. Different levels of consent would then end up being distinct contexts for which one gives this yes-no.

Next to that there are some provenance states tracked on the current state of the consent-conclusion (e.g. knowing it was expired, revoked, ... )



### Remark (joanna):  how does any one know about violations?

Depends on internal audits by the data processor themselves.

Additionally each individual should be able to ask your personal-data full output and then do some own analysis on top of that -- off course this should include these consent-records too, hopefully also in a way that those were digitally signed. 



### Remark (joanna):  culture of blind consent

(mpo) marked this section too - but quite liked it -- also the paradox with the line near the end of the paragraph about "(these people being) more concerned with how they would be perceived by others" 



## <a name="Expectations">Meeting expectations</a>

### Missed hope (Geert) : lack of level of standardisation

There is no final conclusion, still leaves a lot of work (and decisions about them) to people making implementations.


### As expected (mpo) : are we not questioning this privacy issues too much now because it is digital (durable in high quality and easily findable)

Geert just ignores the whole idea --> it is about practically protecting yourself. To not get in jail. 



## <a name="Application">Applying the Knowledge</a>

### Usage (Geert) : City of ghent 

Has already an online platform that display the ways person data is being processed --> https://verwerkingsregister.stad.gent/


Could be extended with this kind of approach so the "digital-citizen-platform' also holds/exposes to the citizen this kind of 'consents-that-were-given'

Additionally the internal policies could be probably be audited by appication of this kind of formal traces.

### Usage (mpo): As citizens of course we can up more usage?

* Nice if there would be more standardisation as you can then do an external audit (or let it be cheeply done) of them actually following the GDPR rules - and having proper consent on record for all

* Geert -- such standardisation (provided they follow rules) could also allow us to gauge the 'privacy-protectiveness' of services, which we could then use to decide which ones we prefer (like apps on your phone that require less permissions to provide theis service)

* Even onto the next level we could envision disclosing the policies in a semantic way (outside scope of this paper)

* Johan suggests that it could also drive internal audits --> assuring now coding errors were made ignoring some consents being needed for operation (relates to recent story in the BE news about websites with cookie-accept-dialogues that simply ignored end-user requests)

Ref: [Political parties were collecting our data without us knowing it](https://www.vrt.be/vrtnws/nl/2023/11/17/politieke-partijen-respecteren-niet-allemaal-de-cookiewetgeving/)



## <a name="AOB">Any other business</a>

* EOY report & [questionaire](https://docs.google.com/forms/d/e/1FAIpQLSftFk0Y2oFsgF3SinKwiVI_mNvbdPBKZ8sDXsi1hltNKPkPMQ/viewform)
    * In person sessions still an option?
    * Sessions to share knowledge about our architecture, semantic stack? E.g. Dutch Land Registry: https://pdfs.semanticscholar.org/a7ca/799651c52c00e08114dfc2e88ecd3e45b5b5.pdf

* Next session -- to be anounced start 2024



