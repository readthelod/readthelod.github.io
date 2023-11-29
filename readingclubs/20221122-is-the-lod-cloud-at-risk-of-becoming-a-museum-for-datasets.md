---
layout: readingclub
curly: true
permalink: /reading-club/20221122-is-the-lod-cloud-at-risk-of-becoming-a-museum-for-datasets
---

# ReadtheLOD 2022-11-22

## Index
1. <a href="#Meta">Meta</a>
1. <a href="#Understanding">Understanding the paper</a>
1. <a href="#Critique">Critique</a>
1. <a href="#Expectations">Meeting expectations</a>
1. <a href="#Application">Applying the Knowledge</a>
1. <a href="#AOB">Any other business</a>


## <a name="Meta">Meta</a>

* 1st Reading Club gathering of [readthelod](https://readthelod.org/)
* Paper Discussed: [Is the LOD cloud at risk of becoming a museum for datasets? Looking ahead towards a fully collaborative and sustainable LOD cloud” by Jeremy Debattista, Judie Attard, Rob Brennan, Declan O’Sullivan](https://www.academia.edu/65356421/Is_the_LOD_cloud_at_risk_of_becoming_a_museum_for_datasets_Looking_ahead_towards_a_fully_collaborative_and_sustainable_LOD_cloud)
* Date: Nov 22nd 2022 2pm-5pm
* Location: [VLIZ InnovOcean Campus](https://vliz.be/nl/hoe-vliz-bereiken)
* Attending Members: Niels Vandekeybus, Geert Limpens, Marc Portier, Cedric Decruw, Joanna Goley, Bram Ulrichts


## <a name="Understanding" >Understanding the Paper</a>

*What parts of the paper are not directly clear / what can use some extra introduction or context to you?*


### Question: Figure 6, What does the dereferencer part mean?

**(Niels V)** Typically, the dereferencing is about following the path of redirects between the identifier (URI) and the location of the content (URL).
Can also contain a language header to request the language wanted.

**(mpo)** (More theoretically) It could also be about injecting additional logic needed to make the transition between the URI and the actual content (URL). Specially in the case of using URNs.

*Example at VLIZ:* Each entry of species names in [WoRMS](https://marinespecies.org) has a local AphiaID. These numbers only make sense if you know their context, i.e. if you know it is an AphiaID. If you want to use this in a linked data context then you have to give this a global identifier. Back in the day it was opted to use a [lsid.info](https://lsid.info)-based URN for these. For these URNs a very specific dereferencing mechanism was put in place. You can´t just put them in a browser or ``curl`` library to follow the redirect - you need actual knowledge about the lsid setup to make the translation. For such cases a generic 'dereferencer' component does more then only follow http-redirects.

For instance in the case of aphia-id [150511 (the horseshoe crab)](https://www.marinespecies.org/aphia.php?p=taxdetails&id=150511) the actual URI is ``urn:lsid:marinespecies.org:taxname:150511`` -- to get to the actual content representation though one needs to translate that to ``http://lsid.tdwg.org/urn:lsid:marinespecies.org:taxname:150511``which then further undergoes redirects to end up at ``http://www.marinespecies.org/aphia.php?p=taxdetails&id=150511``


### Question: what is voID?

[voID](https://www.w3.org/TR/void/) is a W3C vocabulary to describe information about (triple based) datasets
Alternatives are [DCAT (also from W3C)](https://www.w3.org/TR/vocab-dcat-2/) and [schema.org](https://schema.org/).

Interesting to note that schema.org just copied over the popular elements from DCAT - so they are often considered "interchangeable"

The recommendation is typically to manage and write the metadata in DCAT at the core but consider when publishing it via the website to add the schema.org mappings. (i.e. add the extra triples for clarity)

More opinion about the Schema.org approach
* While some dislike this copy-over of already defined concepts into their own schema.org realm, -- this approach is kind of useful as it leads to one integrated view rather than the sometimes confusing semi-overlaps in the pure decentralized vocab approach of the semantic web
* Another point of critique is their lack of formal schema/shape restrictions and descriptions (e.g. no range/domain or other usage limitations)  -- although other have embraced the broather applicability of the terms this brings.
* Finally schema.org famously and explicitely does not make a distinction between URIs identifiying the concepts versus their describing pages (aka the [range14 issue](https://en.wikipedia.org/wiki/HTTPRange-14)) -- another point 


### Question: "Crawling the web of data"? Is that an alternative to "Query the lod cloud"?

Crawling refers to "how one browses" --> following links from one source to the next.

**addition Rob Brennan**  Crawling is typically an automated process to harvest/copy the web eg for analysis and so goes beyond browsing.

This is different to how you query an endpoint (where data often is pre-aggregated)



### Question: what is LOD Laundramat?

[LOD Laundramat](https://lodlaundromat.org/) is used as a mirror (in some cases almost like a way back cache even) and aggregator for linked datasets.

The name suggests they are also marking issues and trying to fix them.

We are not completely sure as a group what the full extent of its use is.


### Question: what is LDN?

[Linked Data Notifications](https://www.w3.org/TR/ldn/) is a W3C specification - nobody around the table has actively used it.

Unclear also is how it relates to the w3c spec for [ActivityStreams](https://www.w3.org/TR/activitystreams-core/).

Niels shares some usage experience on using Activity Streams
* Rather simple and straightforward
* Spec is oddly hiding the semantic context in which it is operating though


### Question: what is the difference / use for named graphs (i.e. the step from triples to n-quads)?

After some various insights we somewhat end on the agreed conclusion that the graph identifier should not be used to convey any semantics, it should not be adding essential elements to the knowledge graph (put differently: we should not hide essential knowledge here from people approaching the graph without considering these named grpahs) -- What left is typically using these for governance, maintenance, management and local optimization in certain applications and local stores.


### Question: what is gzip:ntriples?

Is this even a mime type?
https://www.rfc-editor.org/rfc/rfc9110.html#name-gzip-coding



## <a name="Critique">Critique</a>

*Any reactions / ammendments / extra suggestions / missed opportunities about the paper?* 

### What about (extending) this accepted list of licenses?

There are surely more valid open licenses. e.g. the EU and Flemish open government licenses (derived from the CC licenses) seem surely valid as well, and some of these are expressed using the [CC ontology](https://creativecommons.org/ns) which seems a more extensible (semantic) way to approach some "understanding of what any specific license is about".

Not considering that kind of expressiveness and variance is cutting some corners and might be throwing out some valid open data sets. On the other hand: working with curated lists avoids endless discussions.

But then again: those discussion keep being interesting and open up the consideration about «Who gets to decide what “open” is?»

Which lead to sharing memories of the “[international WOI fallen soldiers’ dataset](https://www.inflandersfields.be/en/kenniscentrum-e/namenlijst-e)” --> it has the restriction that it can not be reused for nationalistic purposes: so one can not filter out certain nationalities and always has to keep the names together and make them all viewable in any application.  This makes for an interesting edge case of applying a restriction to (one could argue) further the general «open»  thinking rather than limit it?

So in some twisted paradox reasoning we could question whether the commonly accepted restriction of «no restrictions are accepted» to «become accepted as open» is not actuall too restrictive itself? Is that (meta-) restriction acceptable? And who is it protecting? Or what is it achieving? And how does that allign with any agenda "to further open access, open data, open science? ".  Indeed for any May´69 activists still out there, this has to give flashbacks to their classic slogan "Interdit d' interdire" (it is forbidden to forbid). 


### Academic (Un-)Usefulness

We could get frustrated about the typical academic honesty of keeping various paths open and undecided.

The “the possible ways of improvement” kind of fight with (as mentioned before) using strict definitions (limiting viewpoints) that were applied.

Stil we could not deny the more prevalent common sense useful remark that emerges from reading the paper --> it really is not about assessing the quality of the data at any given point, it is all about the governance and quality-maintenance processes we adopt.



## <a name="Expectations">Meeting expectations</a>

*Who in our group voted to read this paper? Who proposed this?*
*What did we expect and how did the paper live up to that?*

Broad agreement it has been a good read to kick of this reading club. Nice entry level, allowing us to cover some introductionary concepts and have some good discussions.

The title (having high clickbait score) has been setting us off on the wrong foot, it seems to have caused reading other (more dramatic?) expectations?

Luckily we feel the lod-cloud (as the actual corpus under investigation in the paper) does not equate to the whole “web of data” idea.

Fact: None of us has ever used the LOD-cloud while we still are happily pursuing the linked data publication of many datasets contributing to the global knowledge graph.

On the other hand, the above could be turned around into observing that we all might be too easily satisfied with "local clouds" and manageable direct links to known partners and their works.  Are we thus not failing to leverage a more global connection?

Still, we also think the distributed nature of the web defies the whole idea of even trying to maintain a central list. From that viewpoint the whole endeavor of the lod-cloud could never be a lot more than a starting point. As such that might equally be a starting point in time as it is in the physical location of the aggregated list.


## <a name="Application">Applied Knowledge</a>
*How could we apply the insights form this paper to our own work / approach / use cases?* 

### A Group (Niels, Geert, Joanna)
*How can we apply the tips from the paper into publishing our datasets, so they become members of the linked-data-cloud (not the strict sense of lod-cloud)"

* Are we linking to other datasets?
    *  Why is linking hard?
    *  There is hardly any incentive to do so
* What is a good way of adding license information and making it discoverable? Considering people look at individual information and not always the entire dataset (metadata). Could be like dcterms. Heuristics could add quality metadata to data.
* Rules are written in a nuanced way to be interpreted by a judge, otherwise you always need to keep updating laws. You could specify "fair use" without having to define "fair use".
* Moral obligation, little added/guaranteed benefit for the organization itself
* Stamp of approval, organization  validating quality:
    * How do we validate quality?
    * Could be done by a standards organization 
    * Should focus also on interlinking which the LOD Cloud seems not.
* SHACL only validates structure, you can link but it says nothing about what you link to (not intrinsic data quality --> that could be covered by having extra processes apply heuristics to identify quality levels - those get added to the triples, and can be filtered on later)
* LDN & DCAT is push vs. pull, is there extra value in LDN on top of DCAT (maybe yes: in the initial registration of new stuff) -- maybe an intermediate solution is to apply signposting.org techniques to find feeds associated to known websites/webservices.


### B group (Bram, Cedric, Marc)
*Narrowly looking at the VLIZ project about DM-BON - and considering the bottom line we destilled from the paper "How to do regular checks of the quality and report back to fix". What should we be doing?* 

Steps to be taken:
* We need to get into semantic uplifting to produce triples from the raw data
* What about the quality of our templates?
  * Did they run correctly --> notify errors
  * Can we measure and compare information content? (e.g., compare csv cells versus generated triples?)
  * Which vocabs are we using? who else is using them? do we need to map our stuff to other stuff -> We see no way to automatically detect these defects but we should at least be reactive to suggesting to consider other (e.g. via Github issues)
* We need validation
  * Could be even post semantic uplifting (although test cases in template writing should cover lot)
* To make it all effective: we should get updates of new stuff
  * Within a crate we are already thinking about LDES feeds to mention what is new
  * But when a new crate is coming up inside a space, we should consider sending a notification (LDN or activity stream).


## <a name="AOB">Other business, next steps</a>

*We thought it to be a wise extra to notify the author of our get-together and allow some reaction.* (action Marc)


### Next club
* Keep the [readthelod-chat-channel](https://chat.semantic.works/#/room/#readthelod:chat.semantic.works) we used before
* Create extra members and buzz for Read the LOD
* Next meeting? *Targetting week of Febuary 6th*
* Call to action: 
    * we still need extra papers --> maybe some about comparing activitystreams to LDN ?
        * LDN --> https://doi.org/10.1007/978-3-319-58068-5_33
        * acitivity streams (??)
        * some comparison / evaluation (??)
    * maybe a paper on ro-crates could be useful too --> https://doi.org/10.5281/zenodo.5744421
