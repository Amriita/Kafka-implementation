// Kafka Q&A in JavaScript

// 1. What is Kafka, and Why do we use it?
const whatIsKafka = () => {
    return "Kafka is a distributed event streaming platform used for high-throughput, fault-tolerant real-time data processing and data pipelines. It is commonly used for building data pipelines, streaming analytics, and integrating microservices.";
};

// 2. Key Features of Kafka
const kafkaKeyFeatures = () => [
    "High Throughput",
    "Fault Tolerance",
    "Durability",
    "Horizontal Scalability",
    "Distributed Architecture",
    "Real-time Processing"
];

// 3. Topics and Partitions in Kafka
const kafkaTopicsAndPartitions = () => {
    return "Topics are logical categories to which data streams are published. Each topic is divided into partitions for better scalability and parallel processing.";
};

// 4. Producers, Consumers, and Consumer Groups
const kafkaRoles = () => ({
    producer: "Producers publish messages to Kafka topics.",
    consumer: "Consumers read messages from Kafka topics.",
    consumerGroup: "A consumer group is a collection of consumers working together to consume messages from one or more topic partitions."
});

// 5. How Kafka divides the load between different partitions
const kafkaLoadBalancing = () => {
    return "Kafka divides the load by assigning partitions to different consumers within a consumer group. Each partition is consumed by only one consumer in the group.";
};

// 6. How many consumers can consume from one topic?
const consumerLimit = () => {
    return "The number of consumers consuming from a topic cannot exceed the number of partitions in that topic.";
};

// 7. What is Lag?
const kafkaLag = () => {
    return "Lag is the difference between the last offset produced to a partition and the last offset consumed by a consumer.";
};

// 8. Causes and fixes for lag
const lagCausesAndFixes = () => ({
    causes: [
        "High message volume",
        "Slow consumer processing",
        "Network latency"
    ],
    fixes: [
        "Scale up consumers",
        "Optimize consumer processing logic",
        "Ensure proper network infrastructure"
    ]
});

// 9. Improving performance with a limited number of consumers
const performanceImprovement = () => {
    return "Use asynchronous message processing and batch consumption to improve performance with a limited number of consumers.";
};

// 10. What is a Kafka Broker?
const kafkaBroker = () => {
    return "A Kafka broker is a server responsible for storing and managing partitions and serving producer and consumer requests.";
};

// 11. What is Fault Tolerance and how Kafka handles failures?
const faultTolerance = () => {
    return "Fault tolerance is the ability to continue operating despite hardware or software failures. Kafka achieves this by replicating partitions across multiple brokers.";
};

// 12. Why is the number of consumers generally odd?
const oddConsumersReason = () => {
    return "An odd number of brokers is preferred to ensure better fault tolerance and majority voting during leader elections.";
};

// 13. Kafka Use Cases
const kafkaUseCases = () => [
    "Real-time analytics",
    "Event sourcing",
    "Data pipelines",
    "Microservices communication",
    "IoT data processing"
];

// 14. Kafka vs RabbitMQ
const kafkaVsRabbitMQ = () => ({
    kafka: "Distributed, high-throughput event streaming system.",
    rabbitmq: "Message broker designed for reliable messaging between applications."
});

// 15. What is the replication factor in Kafka?
const replicationFactor = () => {
    return "The replication factor is the number of copies of a partition that Kafka maintains across different brokers for fault tolerance.";
};

// 16. What is Offset?
const kafkaOffset = () => {
    return "Offset is a unique identifier assigned to each message within a partition to track consumption.";
};

// 17. What is Zookeeper and how does it work?
const zookeeperInfo = () => {
    return "Zookeeper is a distributed coordination service used by Kafka for leader election, configuration management, and metadata storage.";
};

// 18. How does Kafka help in microservice-based applications?
const kafkaInMicroservices = () => {
    return "Kafka decouples microservices by providing a reliable and scalable messaging backbone, allowing services to communicate asynchronously.";
};

// 19. What is the Leader Election Algorithm?
const leaderElectionAlgorithm = () => {
    return "Kafka uses Zookeeper to perform leader election, ensuring that only one broker is the leader for a given partition at a time.";
};

// 20. How does load balancing happen in Kafka?
const kafkaLoadBalancingMechanism = () => {
    return "Load balancing in Kafka is achieved by distributing partitions among different brokers and consumers within consumer groups.";
};

// Export all answers for further use
export {
    whatIsKafka,
    kafkaKeyFeatures,
    kafkaTopicsAndPartitions,
    kafkaRoles,
    kafkaLoadBalancing,
    consumerLimit,
    kafkaLag,
    lagCausesAndFixes,
    performanceImprovement,
    kafkaBroker,
    faultTolerance,
    oddConsumersReason,
    kafkaUseCases,
    kafkaVsRabbitMQ,
    replicationFactor,
    kafkaOffset,
    zookeeperInfo,
    kafkaInMicroservices,
    leaderElectionAlgorithm,
    kafkaLoadBalancingMechanism
};
