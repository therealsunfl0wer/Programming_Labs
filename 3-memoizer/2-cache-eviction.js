/*
3.	Cache Eviction Policies (Configurable)
	•	Least Recently Used (LRU): Remove the oldest unused entries when the cache reaches its maximum size.
	•	Least Frequently Used (LFU): Remove entries that are least accessed.
	•	Time-Based Expiry: Expire cache entries after a configurable time limit.
	•	Custom Policy: Allow users to pass a custom eviction function.
4.	Performance Considerations
	•	Avoid excessive memory consumption by automatically pruning the cache based on the selected strategy.
*/
