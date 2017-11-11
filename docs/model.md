# Model

## ORGANIZATION 
	- username				STRING
	- fullname				STRING
	- location				STRING
	- description			STRING
	- image					STRING
	- url_fb					STRING
	- url_ig					STRING
	- url_other				STRING

----

## DONOR
	- username				STRING
	- fullname				STRING
	- location				STRING
	- description			STRING
	- image					STRING
	- url_fb					STRING
	- url_ig					STRING
	- url_other				STRING

----

## JOB
	- organization_id		INT
	- title					STRING
	- description			STRING
	- image					STRING
	- categories			ARRAY
	- is_finished			BOOL

----

## PROPOSAL
	- job_id					INT
	- donor_id				INT
	- message				STRING
	- link					STRING
	- is_winner				BOOL

----

## REVIEW
	- job_id					INT
	- organization_id		INT
	- donor_id				INT
	- rating					INT
	- message				STRING

----

## CATEGORY
	- name					STRING

---

**Relation**

ORGANIZATION to JOB		: one to many
JOB to PROPOSAL			: one to many
DONOR to PROPOSAL			: one to many*
PROPOSAL to REVIEW		: one to many*
DONOR to CATEGORY			: one to many
ORGANIZATION to CATEGORY	: one to many

	*) Donor bisa mensubmit Proposal ke lebih dari 1 Job, tapi hanya bisa mensubmit 1 Proposal per Job. Organization harus memberi Review ke tiap Proposal yang masuk (1 Review per Proposal).

