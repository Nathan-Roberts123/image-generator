pipeline {
    agent any

    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'master', credentialsId: 'git-cred', url: 'https://github.com/Nathan-Roberts123/image-generator.git'
            }
        }
        
        stage('Build & Tag Docker Image') {
            steps {
               script {
                   withDockerRegistry(credentialsId: 'docker-cred') {
                            sh "docker build -t nsindiso/image-generator:v2 ."
                    }
               }
            }
        }
        
        stage('Push Docker Image') {
            steps {
               script {
                   withDockerRegistry(credentialsId: 'docker-cred') {
                            sh "docker push nsindiso/image-generator:v2"
                    }
               }
            }
        }
        
        stage('Deploy To Kubernetes') {
            steps {
               withKubeConfig(caCertificate: '', clusterName: 'cheap-learning-cluster', contextName: '', credentialsId: 'k8s-cred', namespace: 'webapps', restrictKubeConfigAccess: false, serverUrl: 'https://AE9143E81D37A7F4A9436022E503A644.gr7.us-east-1.eks.amazonaws.com') {
                        sh "kubectl apply -f k8s-deployment.yaml"
                }
            }
        }
        
        stage('Verify the Deployment') {
            steps {
               withKubeConfig(caCertificate: '', clusterName: 'cheap-learning-cluster', contextName: '', credentialsId: 'k8s-cred', namespace: 'webapps', restrictKubeConfigAccess: false, serverUrl: 'https://AE9143E81D37A7F4A9436022E503A644.gr7.us-east-1.eks.amazonaws.com') {
                        sh "kubectl get pods -n webapps"
                        sh "kubectl get svc -n webapps"
                }
            }
        }
    }
}
