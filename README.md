# TechEmpower Web Framework Benchmarks data visualization

This code visualizes how well different test implementations scale as the number of client connections increases. This is done by plotting test implementation throughput against concurrency level for test types 1, 2, 4 and 6. Test types 3 and 5 plot throughput against the number of DB queries per request.

Well-scaling test implementations should have a positive, steep slope for test types 1, 2, 4 and 6 whereas for test types 3 and 5 the slope is expected to be negative.

Learn more about [TechEmpower Web Framework Benchmark](http://www.techempower.com/benchmarks/) data.

Implementation technologies and libraries:
- Highcharts JS charting library
- JQuery v2
- Bootstrap v3
- express web development framework for Node.js
- OpenShift Node.js cartridge
