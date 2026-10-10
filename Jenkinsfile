pipeline {
    agent any

    tools {
        nodejs 'node'
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // Create the destination directory if it doesn't exist (using sudo/permissions)
                sh 'sudo mkdir -p /var/www/portfolio'

                // Copy the built bundle to your web server path
                sh 'sudo cp -r dist/* /var/www/portfolio/'

                // Ensure the web server user owns the files
                sh 'sudo chown -R www-data:www-data /var/www/portfolio/'

                echo 'Portfolio successfully deployed to /var/www/portfolio!'
            }
        }
    }
}
