---
layout: default
permalink: /reading-club/ReadtheLOD 2023-04-24
---

# ReadtheLOD 2023-04-24

## Index
1. <a href="#Meta">Meta</a>
1. <a href="#Understanding">Understanding the paper</a>
1. <a href="#Critique">Critique</a>
1. <a href="#Expectations">Meeting expectations</a>
1. <a href="#Application">Applying the Knowledge</a>
1. <a href="#AOB">Any other business</a>


## <a name="Meta">Meta</a>
* 3rd Reading Club gathering of [readthelod](https://readthelod.org/)
* Paper Discussed: Are We Better Off With Just One Ontology on the Web? by Haller et al. ([PDF](http://www.semantic-web-journal.net/system/files/swj2307.pdf))
* Date: Feb 13th 2023 2pm-5pm
* Location: [ONLINE](todo://add-link)
* Attending Members:  Bram Ulrichts, Geert Limpens, Marc Portier



## <a name="Understanding" >Understanding the Paper</a>


(1) Geert struggles with the section about the usage (or lack) of Description Logics (DL) Semantics in dbpedia versus wikidata.

This section even reads as a strange meta-level contradiction to the paper's own conclusion: it is best to have only one ontology for the web, except for when you need an ontology to describe your ontology?  For some reason having own local wikidata description logics enables a lot more room for evolving interpretations.



(2) Marc is in search of a definition for "ontological commitment" 
* is it about committing to the effort of providing full ontological descriptions on your terms (ie using owl. descripion logic) 
* is it about committing to the consequences of aligning and reusing these these "upper ontologies" -- but then even still: the work related consequences of following up on changes, or the semantical consequences of being subject to derivatives and reasoning based on those other ontologies?
* is it (only) about committing to the actual usage of your own ontology?
* or is it some mix of all of this?

From Wikipedia: In information systems and artificial intelligence, where an ontology refers to a specific vocabulary and a set of explicit assumptions about the meaning and usage of these words, an ontological commitment is an agreement to use the shared vocabulary in a coherent and consistent manner within a specific context.



(3) Difficult sentence to read: (page 8 line 30) "Interestingly, ..." -- but apparently we all end up interpreting it in the same way.



### Question : Who in the reading group has any specific experience with the mentioned ontologies ? ###

* schema.org -- we all encounter this regularly
* wikidata -- from the side Geert knows about the CoGhent project which refers to wd
* obo foundry -- VLIZ partners have seen references to this in passing, no immediate connection though
* CYC -- rings a bell to Bram
* BFO, SUMO, DOLCE -- other upper ontologies were all new to all
* Gene Ontology (GO terms) -- known by Bram


Sidewise possible confusion / terms usage of "RDF"
* RDF as in the triple approach
* but some prefixes are pointing to specific ontologies 
  * rdf: <<http://www.w3.org/1999/02/22-rdf-syntax-ns#>>
  * rdfs: <<http://www.w3.org/2000/01/rdf-schema#>>


(4) patterns registry?
* http://ontologydesignpatterns.org/wiki/Main_Page

## <a name="Critique">Critique</a>


(1) Conclusions seem to be valid, but are pretty much lacking tracable (or at least available in the paper) motivation:

* « "Winner takes all" would be a true boon » 
* bottom-up development like in wikipedia would be better

What is the (quantified?) methodology leading up to this conclusion?

Much (if not all) of the evaluation of success seems to link to "popular usage" - e.g. the section on evaluating discovery for schema.org gets even replaced by some "no need to ever discover it, since its widespread use brings it to your doorstep" ?? - leading to (not wrong, and often experienced) circular reasoning: things are popular because they are.


(2) What is the correct interpretation of the question in the title really?

* one ontology == one per focussed domain
    * paper seems to accept that many ontologies in specific fields keep existing e.g. foaf, owl, rdf, rdfs, ...
    * but when focussing on ontologies that conflict / overlap like schema.org vs wikidata there should really be only one 
    * even kind of appreciates this in the (conflicting with the conclusion) statement on page 5 line 47 about the "long tail of ontology use on the web"
* actually, really one ?
    * so all under one governed domain?
    * rather utopic ?
    * also not "modular" --> since the paper advocates this modularization, it feels like the "one single domain" is not matching the intended constraint for "one ontology" ? 
* the methodology to organise (for) these
    * e.g. having attributes like bottom-up approach
    * or adhereing to the "maximum reuse criteria"
    * while in reality we are not otganising a thing, and not really can predict success, we only seem to measure usage afterwards, and thus recognise a winner
    * also very dubious statement "winner takes all" guarantees no durability --> winner takes all until the next winner comes along?


## <a name="Expectations">Meeting expectations</a>

* Geerts expectations based on the title not really met -- there is more time spent on "what should be the one ontology" 

* Marc was more looking forward on a metalevel?  to "the expectations for the read-the-lod session" and find those are really met:
    * this was a les techy focussed session
    * the paper might not be conclusive, it does give a good set of elements to think about "ontology engineering" in a profound way + introduces some new stuff I had not considered earlier

* Bram has voted this one up, actually while he was working on creating an own ontology.  In the end reading up this paper gave some new tools and insights for continuing that work. In the end the utopic dream from the title got replaced by a growing confidence that much matching and gradual replacement and addaptation is still possible. One does not need to be right the first time, one does not have to create or select the one winner, flexible adaptation and move towards the winner is still possible.


## <a name="Application">Applying the Knowledge</a>

Being close to this, we realise the [OSLO traject](https://www.vlaanderen.be/digitaal-vlaanderen/onze-oplossingen/oslo) in flanders is trying to be a governing strategy for creating ontologies in a way that it tries to ensure some of the needed criteria; quality, trust, shared commitment...  Only to end up with yet another ontologie to be released in this winner-takes-all arena, where we just have to wait for the (possibly temporary) de facto end-result "popular uptake"

All in all it looks like we all have learned to survive in this largely undefined space of "ontology engineering" and are finding some balance of local advancement and super local allignment and collaboration + advocating what we already use in the hope others will commit to the same ontologies.

And all of this is not even narrowed to the realm of ontologies -- it relates to a human strategy not to end up "standing alone" - something we recognise in the ancient quote that "nobody ever got fired for choosing blue (ibm)"


So are we able to take lessons from all of these thougts (from the paper and from our own discussion + experience) to make beneficial contributions to the process of ontology engineering:

* lookup of existing linked -open- vocabularies https://lov.linkeddata.es/dataset/lov/
    * evaluate (numeric?) criteria 
    * specially the popular-usage-count 
        * but we should have distinct counts of vocab usage vs actual data usage (and even then: counting triples, or counting websites?)
        * transparency of counting methodology ? who is harvesting? when? 
* support and best practices for the various "criteria"
    * availability ? (leading to a discussion on dependency on referers like purl which only redirect but do not host an ontology)
    * discoverability 
        * -> linked open vocabularies
        * hopefully (as the article suggests) searching for ontologies will have its own google search term
        * this would make ontologies become harvestable rather then require a manual sign up process
            * using a rdf service description (DCAT based) for any available domain declaring what it is offering
            * applying [FAIR signposting](https://signposting.org/FAIR/) to make it auto-findable
    * completenss & adaptability
        * process for negotiation about correct usage, as well as completions and corrections
    * maintenance and versioning
        * source / github repo? best practice for collaborating on ontologies?
        * publishing strategies
            * VLIZ ==> workflow (guthb actions) for direct publishing (using gh-pages) --> e.g. https://github.com/vliz-be-opsci/pylode-to-pages (at work on https://open-vocabularies.vliz.be/)
            * D09 ==> subject pages (focus on displaying the data rather than the ontologies) https://github.com/StadGent/vue_site_lod-visualisation
    * modularization
        * none of us has up to now actually felt a very specific stress here - basically most of our ontology engineering is either opportunistically picking some cherry's from existing ontologies, or just creating tuned and local ones
        * so unclear what is needed here (maybe we need to understand the owl:imports better?)
        * some aspects we feel are related: guides to separating and grouping our ontologies by using any of multiple namespaces vs multiple ones linked, multiple repos vs one, multiple resources vs fragment identifiers inside one, publishing ontology docs & dumps vs making it queryable on sparql
    * quality
        * enabling automatic consistency checks through DL semantics
            * surely at the moment you want to transition from your own local try outs and apps into a usage that can be adopted by ohers too --> aiming for interoperability brings this naturally
        * having a community based bottom up - many eyes approach
    * trust
        * alignment with others like in the OSLO in Flanders
        * providing test, documentation, UC samples, and provenance 
        * adding your own vocabs / ontologies to registries to be found



## <a name="AOB">Other business, next steps</a>

* Niels to provide a 1000 words rehash and completion (without using chatGPT) of our minutes
* ask Joanna to publish this on the site + send link to Geert
* Geert volunteers to reach out to the authors
* Bram suggests we invite the authors ahead of the event -- so authors can log in too? (surely for the papers associated to UGent we should do this)



### Next club

*any comments suggestions?*

