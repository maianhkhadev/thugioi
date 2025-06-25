pipeline {
  agent {
    label 'node-node16-toolchain || cache-btxux-m'
  }
  options {
    timestamps()
  }

  stages {
    stage('NPM Install') {
      steps {
        container("node") {
          withEnv(["HOME=${WORKSPACE}"]) {
            sh "mkdir -p /cache/npm"
            sh "npm config set cache /cache/npm"
            sh "npm ci --include dev"
          }
        }
      }
    }

    stage('Run unit tests') {
      steps {
        container("node") {
          withEnv(["HOME=${WORKSPACE}"]) {
            sh "NODE_ENV=test npm test"
          }
        }
      }
    }

    stage('Run code linting') {
      steps {
        container("node") {
          withEnv(["HOME=${WORKSPACE}"]) {
            sh "NODE_ENV=test npm run lint"
          }
        }
      }
    }

    stage('Build Assets') {
      steps {
        container("node") {
          withEnv(["HOME=${WORKSPACE}"]) {
            sh "NODE_ENV=production npm run build:web"
          }
        }
      }
    }

    stage('Start server') {
      steps {
        sh '''
          npm install -g pm2
          pm2 delete web-app || true
          pm2 start npm --name "web-app" -- start
        '''
      }
    }
  }
}
