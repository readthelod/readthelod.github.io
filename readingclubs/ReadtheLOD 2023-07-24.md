# ReadtheLOD 2023-07-24

## Index
1. <a href="#Meta">Meta</a>
1. <a href="#Understanding">Understanding the paper</a>
1. <a href="#Critique">Critique</a>
1. <a href="#Application">Applying the Knowledge</a>
1. <a href="#AOB">Any other business</a>


## <a name="Meta">Meta</a>
* 4th Reading Club gathering of [readthelod](https://readthelod.org/)
* Paper Discussed: [**Packaging research artefacts with RO-Crate**](https://s11.no/2022/phd/ro-crate/) \
 <https://doi.org/10.3233/DS-210053>
  - [RO-Crate specifications](https://www.researchobject.org/ro-crate/1.1/)
  - [RO-Crate website](https://www.researchobject.org/ro-crate/)
* Date: July 24th 2023
* Location: [ONLINE](https://teams.microsoft.com/l/meetup-join/19%3ameeting_YjIwYzg4NzItZjI2NS00YWQzLTljMTEtODJjZWVmMjQ2MTk1%40thread.v2/0?context=%7b%22Tid%22%3a%22923c2a71-7137-497c-b171-8663dbcaf9ed%22%2c%22Oid%22%3a%2218eaa3fd-347e-4c8b-902d-b08b0e98aae6%22%7d)
* Attending Members: João Dos Santos, Maxence Couppey, Joanna Goley, Marc Portier, Stian Soiland-Reyes, Dieuwertje Bloemen, Milan Lamote, Marleen Marynissen, Maris BV, Geert Limpens, Dieuwertje Bloemen, Bram Ulrichts


## <a name="Understanding" >Understanding the Paper</a>

### Question (Dieuwertje): New to LOD

Linked Open Data standards/ principles were mentioned, but which are they? 

* json-ld
* schema.org
* RDF

Also see: https://s11.no/2023/phd/background/#sec:ld for more extensive background on Linked Open Data evolution.

Layers: RDF is a model of triples (subject/predicate/object) to make a graph.

JSON-LD is then a way to actually write down those triples in a format that can be easily parsed in contemporary programs


Secondly: What are the Linked Open Data standards or principles? Are they different?

Extra context: https://5stardata.info/

Follow the links and get information. Content negotiation would be another principle. Using RDF as also an important part. 

Think this refers to [Tim Berners-Lee](https://www.w3.org/DesignIssues/LinkedData.html).
1. Using URI as a name for things. 
2. Use HTTP URIs so it can be looked up. 
3. Provide information for each URI. 
4. Link to other URIs.


There is also a big overlap between the linked-data principles and the FAIR principles. Now FAIR principles may have become more known than the Linked Data principles. 




### Question (Marleen) About the profiles in use: 

What are these "[profiles in use](https://s11.no/2022/phd/ro-crate/#inuse)" (near the end - the examples). How are they used?
Is it a framework or particular rules?

Some confusion in different examples: there are also "profiles of people" 


Profiles are specializations of RO-Crates.  It allows you to introduce specific restrictions and additions to make the crates more useful inside your domain.

Are there rules about what is needed to provide? Is it just a framework?

There was a specification for how to structure your profile
- https://www.researchobject.org/ro-crate/profiles.html
- https://www.researchobject.org/ro-crate/1.2-DRAFT/profiles

Answer:

RO Crates were getting used in certain ways and so we got some defector implicit "usages" that were all inside the constraints of the specification but were kind of informal specific sub-specs of how to actually use these packages within certain communities.

From there we started investigating documenting these usages in more detail:

- The profiles remain an optional thing.
- Profiles can be implemented gradually. Level 0 is just an informal agreement. In Level 1 you declare an identifier for the profile you conform to. Level 2 is then that at the profile URL you can find those expectations. Now I can read about it. Level 3 is then where the profile itself is also a crate, perhaps including tools, software, and references.



### Question (Stian) Return question: What should profiles be to you?: 

There is an overlap with ontologies and vocabularies. Any experience RDF Shapes (SHACL, ShEx) and [W3C Profiles](https://www.w3.org/TR/dx-prof/) vocabulary?


How to manage the profiles and start with profiles?

More about types than domain-specificity. What fits well into that domain? Spatial metadata for instance. Alternative metadata files -- unclear when the RO-Crate profile ends and when is it a separate metadata file.

Open-endedness. Have easy markers for consumers on what to expect. It is then less of a constraint and more  enabling.

But how do you ensure that they are working on the same thing without making another alternative profile? Flexibility adds a cost to end-user if they have all done it differently.

This is a general problem for the Semantic Web. The comparison is if you didn't have the Semantic Web tech. At least now we have a common way to represent structures, even if our models differ.

This becomes a social aspect, how to gather and agree on how to express metadata in a common way. And do this in a way without forcing everybody to do it all in the same way.

This also ties back to how profiles should not be confused with types.  It is more like duck-typing, a lot more flexible way to grow and extend and change over time, also more inviting people to have slight alternatives that work together for the common parts, and clearly mark and expose parts that are not.  

The idea is also to have a profile registry to be able to make these discoverable.

We also have to agree that certain cleaning and fixing will never go away. The hope is that would just get a bit simpler though.

The flexibility is great at the creator side -- not sure yet it will work out on the usage end.


### Question (Geert) About this claim of «simplicity»:

RO-Crate says it is meant to reduce the learning curve for people not used to Linked Data. Not sure how that is true.

From the paper now it sounds complex. Is that a paradox? It is complex to do something simple!

From RO-Crate community call, it is a continuously revisited question, are we keeping it simple enough?


Makes me think about this ["paradox of simplicity"](https://www.goodreads.com/quotes/1325438-simplicity-is-complex-it-s-never-simple-to-keep-things-simple) 

 __"Simplicity is complex. It's never simple to keep things simple. Simple solutions require the most advanced thinking.'' ― Richie Norton__


What could be left out?

How is it doing this:
- rocrate spec avoids referring to other specs, but explains it how to achieve following the standards by showing the easiest way to do it
- squeezing people into just doing stuff and achieving something off the bat
- Avoid complex stuff such as building your own ontologies, profiles, and conneg, ...


### Question (marc) Can we create an RO-Crate together?:

We need more samples to get there.  The concepts are clear.

1. grab all the files and put them together
2. create a metadata-json file

* Introduction tutorial: https://training.galaxyproject.org/topics/fair/tutorials/ro-crate-intro/tutorial.html


```jsonld
{
"@context": "https://w3id.org/ro/crate/1.1/context",
"@graph": [
    {
        "@id": "ro-crate-metadata.json",
        "@type": "CreativeWork",
        "conformsTo": {"@id": "https://w3id.org/ro/crate/1.1"},
        "about": {"@id": "./"}    
    },
    {
        "@id": "./",
        "@type": "Dataset",
        "hasPart": [
          {  "@id": "foo.txt"}
        ]
    },
    {
        "@id": "foo.txt",
        "@type": "File"
    }
  ]
}
```
### Question (Tjerk) Are the tools there for (normal) people to be editing these?

Look again at the tools. --> See Table 1 in the paper, there are already quite some tools, also targeted at creating RO-Crates.

See also the live (website) list of [tools](https://www.researchobject.org/ro-crate/tools/).

General GUI as an alternative to Describo:
https://language-research-technology.github.io/crate-o/



### Question (Tjerk) Do you have to be on the inside to build a crate?:

Good point.  There are often other people that have prepared and published stuff, and there is surely the challenge of having the proper attribution though.

At least in RO-Crate it is fairly easy to:
* reference external content
* distinguish between claiming authorship on the files versus the package

And then the things you link to can still be behind paywall or authentication requesting platforms.

This just follows how the web works -- it is obviously more useful/open if all is just accessible, but various portions can be indeed closed off.

Also behind the paywall -- inside the organization -- the ROCrates keep being useful.


### Question: (marc) @base usage?

* I've never seen a `@base` used in an example json-ld for ro-crate? Any reason?

This has been discussed.  We should do it as soon as you start introducing them into a common store. There is a section in the spec to explain how to do it.

It depends though on how the crate was published -- so it needs to be a specific solution for the case (in a context where you can make solid assumptions about these)


In a similar fashion, the community decided to rename the main metadata file to be \*.json (not jsonld) -- this will not open on any machine nicely.  So also for this @base thing, we did not want to be too restrictive.


In the 1.2 spec an "attached" crate is being introduced.



### Question: (marc) What is the exact/formal distinction between Data Entities and Contextual Entities?

* distinction "feels" ok or even natural, makes typical, spontaneous sense, until it doesn't?
* can we make that formal/explicit strict?
* attempts:
  * local refs ./**/ indicate embedded presence --> but overlooked remote DataEntities ?
  * @types = File | Dataset entries as clear markers?  CreativeWork? others? array value types?  (what if @type="Person" is our data?)
  * DataEntities have some "hasPart" property-path (multiple steps allowed) to the ./ ?
  
  
the latter is the essence --> hasPart connection  

https://www.researchobject.org/ro-crate/1.2-DRAFT/contextual-entities.html#contextual-vs-data-entities

Appendix https://s11.no/2022/phd/ro-crate/formalizing/ makes a strong distinction between Data Entity and Contextual Entity.

https://en.wikipedia.org/wiki/HTTPRange-14


### Question: (joanna) What was the actual lead / event that got RO-Crate off the rails?

Stian and Peter Sefton coming together at some point, mixing a data-crate approach with a workflow-packaging -- glued together with a mediator that balanced between both approaches and ambitions.

DCAT was considered too, but schema.org had taken over the basic concepts anyway + was web-centered + and added a lot of different other concepts that were needed anyway.



## <a name="Critique">Critique</a>

### Remark (Bram) how to motivate switching from X format to Ro-crate:

Say I am interested in BioDiversity data why should I stop using DWC-A and switch to RO-Crate


(Stian)
* many things are not covered
* it is about what is the best for which purpose
* things to consider:
  * should it be smashed into the package?  
  * am i replicating things?
  * who am I trying to address?


(Marc)
* Question is not to change to DWC-A or RO-Crate but to change to RDF. 
* As a creator what is your goal. My purpose to to make my data re-used in as many different context as possible. "your" purpose is to be clear, and DWC-A is to format your data in a way to fit into other formats. RO-Crate is  made to make your data clear. RO-Crate fits that purpose. Does not mean DWC-A will not be used. 
* It will be easier to start with an RDF than a DWC-A. RDF gives you the freedom to choose when to stop describing your data. Anyone can convert that 'RDF' format into DWC-A. By allowing your data to be used in a lot more ways then    

Darwin Core Terms https://dwc.tdwg.org/list/ are for RDF and can be used in RO-Crate, but it doesn't mean they all would be appropriate to use in that context.

Darwin Core Archive is not directly using RDF but can be converted to it. 
https://ipt.gbif.org/manual/en/ipt/latest/dwca-guide


Despite all the big thoughts on reuse, Marc is making - when / how is that ever going to convince somebody to actually change to something now?  No reuse.

It needs to be the easiest way, it needs to be a culturally (in their community) accepted way for people to actually do something - to have them change their way of working.

The infrastructure should be self-explaining -- offer a good way of doing as the natural way.

On the side, we note that some of this new way of dealing with copies of crates inside repositories is creating new challenges for conserving version-integrity and syncing up with the sources.


### Remark: about the restrictions on JSON-LD

* Feels like an okay move, makes sense, but for whom is this simpler?  Is that a relevant portion of people / of work involved?
* Unwanted possible side-effects:
  * Does it not add to the surprise of somebody simply using their understanding of what JSON-LD is about?
  * are there readily available "flat-export" routines on the standard RDFLib implementations out there to guarantee?


This is about making sure the expectations about readable crates remain low and similar for the audience.



### Remark: 

* Just mentioning in fact, because I know its being worked on, and as an obvious way to plug our upcoming RTL session on "FAIR-signposting) 


## <a name="Application">Applying the Knowledge</a>

### Usage #1 How to ingest / export / manage crates in repositories:
break-out-members: Dieuwertje, João, Joanna, Maxence, Milan

https://zenodo.org/record/7867028v
eDNA doesn't have authors, BC no one can be the author of the dna set. Causing some issues with RO-Crate. There is extra information in the RO-crate that is not needed for the upload, but dealing with data loss, import with RO-crate has an issue, bc if you make an edit with the extraction how do you get it back into the ro-crate. 

In excel its transferred into a csv, but then if you edit the excel you can't download the csv. (milan) its dealing with versioning then. 

(milan) What are people of VLIZ using RO-Crate for? 

Sources of Dieuwerje - all over, but need exporting of datasets that were not Ro-crates into ro-crates. enl zips, have been downloaded as ro-crates. not the datasets as a whole but these enl formats. 

ro-crate formats will be very different (too much freedom) thus.  

(Q) Can you add file metadata into a ro-crate that already exists?

(Q) Are there 'dummy' crates to use? 



There seems to be new RO-Crate work for the "attached vs. detached" concept of RO-Crate.

There remains an issue with flagging possible changes to the content / guarantee integrity.


### Usage #2 How to have rocrates and dwc-a side by side?:
break-out-members: Bram, Stian


Started looking at an example.
Mainly the EML overlaps with what is in the ro-crate-metadata.json
There are some more specialized terms -- the @context should be adding these.

Hard to decide what is the master format. --> That is probably not easy / possible to decide in general for all cases.

There could be one different master graph that allows to producing both.




### Usage #3 : How to visualize an RO-Crate with conceptual entities.
break-out-members: Marc, Geert

VLIZ is working on a visualizer for RO-CRate content
demo at : https://open-science.vliz.be/demo-rocrate/


Todo decide what the best possible visualization would be for the html-preview for the various kinds of entities

- (1) local data Entity
- (2) remote data Entity
- (3) Contextual Entity
- (4) extra graph data (contextual?) from embedded data entities

and consider if that should be adapted in any way depending on their type of URI
- (a) / -path IRI
- (b) # -fragment IRI
- \(c\) http:// - remote IRI
- (d) _: - blank node


For (1) and (2) Q?? Should we keep grouping the remote data-entities in a different section?

Note: After today the correct detection of data entities is really "are you part of a hasPart" relation to the root --> if not you are a contextual entity

* for data entities the (b) and (d) IRI make no sense
* for the remaining local or remote distinction we should just
  * keep them in the subset viewable 
  * add a small indicator about the outbound / local nature of the content in the listing
  * also breadcrumb should be kept to the "DATA-entities" section and showing the navigated subset
  * likewise the fragment identifier should be ./



For (3) contextual entities

All is just clear.

Note there should be a mentioned link from the root dataset to all its conceptual entities too!

Considering this requirement it makes more sense to introduce a a section capturing all the orphan nodes (the ones not referred to by the root-entity node)



For (4) extra graph data introduced by additional data-entities 

Do not try to list those as context entities, instead, make a graph viewer that shows their content when drilled down to it (i.e. via optional raw vs graph switch --> similar to raw vs html-table view we already do for csv) 



Note: we should not assume ./ for the root dataset --> we should strictly follow the `about` link from the rocrate-metadata.json entry! & open up with that one, as it should also have the mentions links!

Another suggestion --> for the page listing the conceptual entities it could be nice to also be able to filter by type.



## <a name="AOB">Other business, next steps</a>

### Next club
Fair Signposting

📌 August 21st (14:00 - 17:00)
- Paper: Reminiscing About 15 Years of Interoperability Efforts
- Where: MS Teams (please email info@readthelod.org for registration)
- Special guest: Herbert Van de Sompel


