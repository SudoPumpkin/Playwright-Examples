pipeline {
  agent { 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.16.2-focal'
    } 
  }
  stages {
    stage('install playwright') {
      steps {
        sh '''
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
    stage('help') {
      steps {
        sh 'npx playwright test --help'
      }
    }
    stage('test') {
      steps {
        sh '''
          npx playwright test --list
          npx playwright test
        '''
      }
      post {
        success {
          archiveArtifacts(artifacts: 'playwright-*.png', followSymlinks: false)
          sh 'rm -rf *.png'
        }
      }
    }
  }
}