---
layout: default
permalink: /reading-club/ReadtheLOD 2023-08-21
---

# ReadtheLOD 2023-08-21

## Index
1. <a href="#Meta">Meta</a>
1. <a href="#Understanding">Understanding the paper</a>
1. <a href="#Critique">Critique</a>
1. <a href="#Expectations">Meeting expectations</a>
1. <a href="#Application">Applying the Knowledge</a>
1. <a href="#AOB">Any other business</a>


## <a name="Meta">Meta</a>
* 5th Reading Club gathering of [readthelod](https://readthelod.org/)
* Paper Discussed: [Reminiscing About 15 Years of Interoperability Efforts](http://www.dlib.org/dlib/november15/vandesompel/11vandesompel.print.html) 
 <https://doi.org/10.3233/DS-210053>
* Date: August 21st 2023
* Location: [ONLINE](https://teams.microsoft.com/l/meetup-join/19%3ameeting_YjIwYzg4NzItZjI2NS00YWQzLTljMTEtODJjZWVmMjQ2MTk1%40thread.v2/0?context=%7b%22Tid%22%3a%22923c2a71-7137-497c-b171-8663dbcaf9ed%22%2c%22Oid%22%3a%2218eaa3fd-347e-4c8b-902d-b08b0e98aae6%22%7d)
* Attending Members: Joanna G, Marc Portier, Britt Lonneville, Cedric Decruw, Herbert van Sompel, Dieuwertje Bloemen, Joao Dos Santos 


## <a name="Understanding" >Understanding the Paper</a>

### Background intro from the author: [Herbert Van de Sompel](https://hvdsomp.info/bio/) 

see [wikipedia](https://en.wikipedia.org/wiki/Herbert_Van_de_Sompel)

CV and career that sounds like a world-trip with many achievements, amongst them related to this field:
- [openurl](https://en.wikipedia.org/wiki/OpenURL) standard for academic libraries
- [memento](http://timetravel.mementoweb.org/) -- [RFC 7089](https://www.rfc-editor.org/rfc/rfc7089.html)
- [oai-pmh](https://www.openarchives.org/pmh/) and [oai-ore](https://www.openarchives.org/ore/)

now retired, but still active in: 
- [sign-posting](https://signposting.org)
- [event notifications](https://www.eventnotifications.net/)  which is about combining [Linked Data Notifications](https://www.w3.org/TR/ldn/) and an AP for [Activity Streams-2](https://www.w3.org/TR/activitystreams-core/)


### Question: (Dieuwertje) The paper mentions [dienst protocol](http://www.cs.cornell.edu/NCSTRL/protocol.html) what is this about?

* protocol to communicate between repositories of scholarly papers (in the day scanned versions) in some distributed manner
* it influenced the work on the harvesting protocol of OAI-PMH (and that is why it got mentioned here)


### Question: (Cedric) about the figure 5 on the bottom "github snapshots"

Where do the parts of this diagram live? Specially this human landing page for a software snapshot. Is that a github page thing?

* top part is what has become signposting.org
* the bottom part is more about how code snapshots are published on zenodo -- see for instance [this example](https://zenodo.org/record/5898090)


### Question (Marc) What are the information interoperability problems we should be solving?  

* from the experience of managing the literary and dataset repository at an institution --> indexing of the metadata is often failing <-- we see practical occurances of the "repository focus" effects, namely: if resources are found outside their publishing repo context, then often quite some metadata is missing or misrepresented.
* mapping of metadata info: two different ontologies --> which in fact something skos should be handling
* often the repository-focus of current publication platforms and pportals also leads to narrowed repository-only views: as if the graph gets trimmed at their boundaries, rather then seemlessly link over into the connected resources regardless of where they are.
* there is also a human-error issue on this -- one needs a good review cycle to make sure the techincal linking and metadata transfert accross harvesters is well done -- there is a disconnect between how researchers assume things work, and what is actually needed. 
* the semantics need to be clear -- but even then things are not being used as expected or documented
* signposting is trying to make sure the resource is just discoverable -- you provide all linking at the source.
* we can really achieve this, if we just stick to the standards



### Question: REST without HATEOS (did we all understand that?)

- at the core: REST API responses (typically json) contain identifiers and context info that allow to construct new URI to requests -- but doesn´t clearly contain those with their semantic roles, in stead it exepects another developer to read docs and consume swagger descriptions to implement a client that actually codes for the workflow and the state-transitions
- the real machine-2-machine goal is aiming higher then the typical machine-2-developer level we are currently reaching
- many developers do not know the web at its core
- technically speeking this is about REST developers ignoring the so called "hypermedia constraint" which is an essential element of the [REST architectural style](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)
- we are now in a worse place --> the many REST API that are being published make the problem bigger, not smaller 
- Marc remembers this quote from Ruben Verborgh's blog: 
> While the sum of many individual knowledge graphs is a bigger knowledge graph, the sum of many individual APIs is not a bigger API, but rather a mess of interactions in which neither the server nor the client can improve the situation much within the traditional framework of thinking about APIs. -- [Ruben Verborgh](https://ruben.verborgh.org/) in [Reflections on Knowledge, 2021](https://ruben.verborgh.org/blog/2021/12/23/reflections-of-knowledge/)
- Herbert adds that this situation is beneficial (and likely actively pursued) by the large commercial web-players.  We should not accept this approach in a open research environment.


### Question: Did we all get the "red-pill" paragraph ? What does it mean to you

> When looking from the web at a repository, one actually does not see a repository. Rather, one sees web resources that happen to be exposed by the repository. The notion of a repository does not exist in the Architecture of the World Wide Web; it does not even entail the notion of a web server. The Web is all about resources identified by URIs. In this web-centric perspective, a compound object consists of any number of URI-identified resources that exist somewhere on the web. Constituent resources may be hosted by one or more repositories but that is not considered an essential characteristic. This 180 degree shift in perspective became a veritable aha moment for us, a Kool-Aid we drank, something we saw that can never be unseen.
> -- quoted from page4 explaining the "Resource Oriented View" of the web

* However: the resource view is theoretically sound, but is not a practical approach -- we need the support, we need the publication platform, we need the long term guarantee
* We can easily agree: nothing in the paper suggests we are to do away with repositories (or even web servers) the paper just stresses that on the web your management effort does not matter.
* (marc) relates this further to the silly distinction between datasets and dataservice -- arriving at the bottom line that when you publish information/resources on the web, those have to behave as decent web sitizens in their own right.  Put differently: they should be able to be fully consumed and interacted with by somebody who lacks all insights or documentation of how they arrived there (i.e their management platform / repository)



### Question: did we all get the signposting idea?

Herbert: Do check out [this presentation explaining Signposting](https://zenodo.org/record/7977333) from a FAIR-Digital-Object perspective 

* the general idea is to have the links between the core concepts available 

* we do it to solve a huge problem, being: the need for heuristics to find your way around different portals - by exposing in a standard way the navigational guides (signposts) that are only made available to humans (and are effectively changing over time, so any hueristics in the scraping logic  needs to be addapted regularly)

* how: simple conventions: (1) use the [HTTP-Link header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link) in combination with [IANA assigned link-relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml)

* more use cases:
 - we can now think about a browser plugin that reads these links to notify the user of important related information
 - a ipynb processing could be finding the path to actual data in a RO-Crate 
- citation post-processing could be better reaplcing landing pages with the canonical URI to the actual citation string to be used. (https://arxiv.org/abs/1602.09102)
   



## <a name="Critique">Critique</a>


### Herbert himself being invited to critique/remark on the last 8 years of signposting.org - Where has it gone? Or is it going?

It is a simple thing, takes no time to do.

The uptake has been really slow, only the recent year (mainly through EU projects) there is something clearly happening.

The new version of [dataverse](https://dataverse.org/) and [dspace](https://dspace.lyrasis.org/) will have it on board.

It is so simple it is hard to oppose, and the value is likely to outweigh the effort.

But it is waiting for a network effect -- the real value grows exponentially with the adoption rate.


### Remark: (Dieuwertje) what is the current return on investment?

* It is a long term game for sure, so hang in there, and help us reach the tipping point!
* FAIR-assement tools already support it and help you score on describing your datasets. (e.g. [f-uji.net supports signposting](https://www.f-uji.net/index.php?action=methods#:~:text=metadata%20document%20or-,Signposting,-header%20links.))

Herbert warns us about this not going to be enabled or helped from any commercial player - offering us a story from the [PIDapalooza](https://www.pidapalooza.org/) conference about the clearly stated unwillingness from a present executive of a main commercial player in the repository space. It clearly shows a fundamental bottom line struggle for openness is behind this --> yes, suporting it would allow openness and e.g an easier, more consistent citation, but it would largely also enable bots like scihub to be able to harvest and share...



### Remark: (Marc) we are all convinced, but how do we convince the others?

* adoption triggers adoption! Which is a circular reasoning helas, but many succesful things share this property: we use things because we use them ¯\\\_(ツ)_/¯
* so we are waiting to have things to become mainstream ... (and yet call that innovation :smile: )
* the red-pill paragraph is also not going to win over anybody - it is about an insight that people often will not just get -- it also appeals to a sustainability argument (long term) that is not something that a lot of people are signing up for.

In more general terms: What is driving adoption of standards? Herbert mentions a paper / talk (todo Joanna to follow up) that addresses this.

Marc also thinks abouth a paper from Kate Darling: ["Creativity without law."](https://nyupress.org/9781479856244/creativity-without-law/) that touches upon "what elements drive human behaviour: law+enforcement, architecture+nudging, common accepted morality, economics+benefits

Britt questions about whether bottom-up vs top-down is a better strategy in these cases; but Herbert doubts if one could even make that destinction for fair-signposting: it doesn´t seem to follow that kind of categorisation?

Herbert mentions the need for a standards-community: discussion and adaptation is what makes it better, and supports active adoption.

Herbert also applauds the positive effect of public figures advocating and promoting.

Marc also suggests two other essential properties many "good standards" have in common and should be recognised here: 

Good standards: 
(1) have a big space within (enable more then restrict, create a space for so called permissionless innovation) and 
(2) are simple and clear

Both properties apply to signposting IMHO - so it should be destined for succes :smile:  



### Remark: (Marc) technically signposting is ss close to RDF, but not there quite? How so? Why?

* The full stack that RDF requires/assumes is way to complex, an overshoot to the problem ad hand and something that would chase off potential adopters.
* In fact you could see it (signposting.org) as a simplified way of achieving what OAI-ORE is doing through a full RDF stack approach.
* signposting wants to only focus on the navigation part, skips on the description part (i.e. where rdf excels).

Still, while these observations make a distinction between these realms, there still is a clear link between them too: as soon as RDF works with derefencable follow-your-nose links the distinction really blurs. At that time it makes sense to have these worlds nicely overflow from the one into the other -- _an idea we revisited near the end of the meeting..._


## <a name="Expectations">Meeting expectations</a>

We skipped this section for time management purposes.


## <a name="Application">Applying the Knowledge</a>

### How can we use the knowledge from the paper to enhance our lives?

* (cedric) [showcasing](https://open-science.vliz.be/demo-rocrate/) the [ro-crate preview widget from VLIZ](https://github.com/vliz-be-opsci/rocrate-preview-widget)
 - (herbert) mentions we could be adding a `profile="https://w3id.org/ro/crate`- attribute 
 - we could be adding more typed links to enable more robots, more specific usage
 - see https://zenodo.org/record/7977333 for more details
 - the best way to have these however is in the HTTP-HEADER: like that a robot could simply be using http HEAD requests to build up the info -- if that is not possible html/head/meta is acceptable, but don't inject it through javascript as you only further restrict robots that can coop with this (i.e. they would need a js interpreter on board !)
* (marc) spills the beans on an upcoming DAMS for VLIZ that is going to use signposting to link up metadata on the digital assets it manages
* (britt) considering [marine regions](https://marineregions.org/) -- we could be adding describing links for each of our region-landuing pages to the actual rdf
* (herbert) we could build an alternative to OAI-PMH with this -- simple robot that runs over the repository and harvests all found metadata
* (marc) VLIZ to implement signposting on MDA and IMIS --> possibly pointing to the marineinfo.org identifiers and RDF representations
* (marc) talks about a bigger idea at VLIZ to make general domain descriptions that could be discoverable on a hostede domain via fair-signposting
 - (herbert) points to a domain description effort --> [api-catalog](https://datatracker.ietf.org/doc/draft-smith-api-catalog/)
 - and to the [webid spec](https://www.w3.org/2005/Incubator/webid/spec/identity/)
 - and suggest maybe a better [IANA link-relation](https://www.iana.org/assignments/link-relations/link-relations.xhtml) could exist then `describedby` -- eg `service-desc`
* (herbert) as mentioned earlier reminds how citation manager tools (browser plugin like [Zotero](https://www.zotero.org/)) could benefit from signposting links to canonicalise the referencing with ever less heuristics depending on the publishing repo it encounters
* (marc) makes this tie back to the link between RDF and signposting --> would it not be nice to have nice URIs that represent these link-relation-types - if we do then harvesting the link headers does not need to be in contradiction with building an elementary knowledge graph that helps decide which others to actually dereference (in fact we could that on top of w3id.org)  --> herbert remembers some person (Chris Gutteridge) already started doing that.


## <a name="AOB">Other business, next steps</a>


Useful links:
- https://www.slideshare.net/azaroth42/standards-and-communities-connected-people-consistent-data-usable-applications
- https://arxiv.org/abs/1602.09102

## Next club

No arrangements made.




