"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1671557111284 = void 0;
class default1671557111284 {
    constructor() {
        this.name = 'default1671557111284';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`quiz_response\` (\`id\` int NOT NULL AUTO_INCREMENT, \`response\` varchar(255) NOT NULL, \`quiz_question_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`quiz_question\` (\`id\` int NOT NULL AUTO_INCREMENT, \`question\` varchar(255) NOT NULL, \`has_description\` tinyint NOT NULL, \`has_response\` tinyint NOT NULL, \`quiz_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`response_question\` (\`id\` int NOT NULL AUTO_INCREMENT, \`response_id\` int NULL, \`quiz_question_id\` int NULL, \`quiz_response_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`response\` (\`id\` int NOT NULL AUTO_INCREMENT, \`date\` datetime NOT NULL, \`vehicle_id\` int NULL, \`quiz_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`vehicle\` (\`id\` int NOT NULL AUTO_INCREMENT, \`code\` varchar(255) NOT NULL, \`category\` varchar(255) NOT NULL, \`chassis\` varchar(255) NOT NULL, \`year\` varchar(4) NOT NULL, \`license\` varchar(10) NOT NULL, \`acquisition\` datetime NOT NULL, \`unity_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`unity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`organization_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`abvesc\` varchar(255) NOT NULL, \`registration\` varchar(11) NOT NULL, \`general_registration\` varchar(20) NOT NULL, \`birthday\` datetime NOT NULL, \`blood_type\` int NOT NULL, \`organization_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`organization\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`quiz\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, \`organization_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`quiz_response\` ADD CONSTRAINT \`FK_e42e68c6fd49eeb51b092018d75\` FOREIGN KEY (\`quiz_question_id\`) REFERENCES \`quiz_question\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`quiz_question\` ADD CONSTRAINT \`FK_77e8e87d9e707fabdb82bf227fc\` FOREIGN KEY (\`quiz_id\`) REFERENCES \`quiz\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`response_question\` ADD CONSTRAINT \`FK_1b94d4a368b1603faedc47bd106\` FOREIGN KEY (\`response_id\`) REFERENCES \`response\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`response_question\` ADD CONSTRAINT \`FK_849c080b7d392af62078dad6a03\` FOREIGN KEY (\`quiz_question_id\`) REFERENCES \`quiz_question\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`response_question\` ADD CONSTRAINT \`FK_852a15391ac1ff511aa9f611bc0\` FOREIGN KEY (\`quiz_response_id\`) REFERENCES \`quiz_response\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`response\` ADD CONSTRAINT \`FK_deae9d7959791ad52c7e121f536\` FOREIGN KEY (\`vehicle_id\`) REFERENCES \`vehicle\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`response\` ADD CONSTRAINT \`FK_a607c4d820466fe949292ff0af5\` FOREIGN KEY (\`quiz_id\`) REFERENCES \`quiz\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`vehicle\` ADD CONSTRAINT \`FK_ccb4b6dd48bd17b5cfae382506b\` FOREIGN KEY (\`unity_id\`) REFERENCES \`unity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`unity\` ADD CONSTRAINT \`FK_a519d014e92aa216a57c7962a64\` FOREIGN KEY (\`organization_id\`) REFERENCES \`organization\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_3e103cdf85b7d6cb620b4db0f0c\` FOREIGN KEY (\`organization_id\`) REFERENCES \`organization\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`quiz\` ADD CONSTRAINT \`FK_05e3501f023d6c8f6f73ec5ae1b\` FOREIGN KEY (\`organization_id\`) REFERENCES \`organization\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`quiz\` DROP FOREIGN KEY \`FK_05e3501f023d6c8f6f73ec5ae1b\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_3e103cdf85b7d6cb620b4db0f0c\``);
        await queryRunner.query(`ALTER TABLE \`unity\` DROP FOREIGN KEY \`FK_a519d014e92aa216a57c7962a64\``);
        await queryRunner.query(`ALTER TABLE \`vehicle\` DROP FOREIGN KEY \`FK_ccb4b6dd48bd17b5cfae382506b\``);
        await queryRunner.query(`ALTER TABLE \`response\` DROP FOREIGN KEY \`FK_a607c4d820466fe949292ff0af5\``);
        await queryRunner.query(`ALTER TABLE \`response\` DROP FOREIGN KEY \`FK_deae9d7959791ad52c7e121f536\``);
        await queryRunner.query(`ALTER TABLE \`response_question\` DROP FOREIGN KEY \`FK_852a15391ac1ff511aa9f611bc0\``);
        await queryRunner.query(`ALTER TABLE \`response_question\` DROP FOREIGN KEY \`FK_849c080b7d392af62078dad6a03\``);
        await queryRunner.query(`ALTER TABLE \`response_question\` DROP FOREIGN KEY \`FK_1b94d4a368b1603faedc47bd106\``);
        await queryRunner.query(`ALTER TABLE \`quiz_question\` DROP FOREIGN KEY \`FK_77e8e87d9e707fabdb82bf227fc\``);
        await queryRunner.query(`ALTER TABLE \`quiz_response\` DROP FOREIGN KEY \`FK_e42e68c6fd49eeb51b092018d75\``);
        await queryRunner.query(`DROP TABLE \`quiz\``);
        await queryRunner.query(`DROP TABLE \`organization\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`unity\``);
        await queryRunner.query(`DROP TABLE \`vehicle\``);
        await queryRunner.query(`DROP TABLE \`response\``);
        await queryRunner.query(`DROP TABLE \`response_question\``);
        await queryRunner.query(`DROP TABLE \`quiz_question\``);
        await queryRunner.query(`DROP TABLE \`quiz_response\``);
    }
}
exports.default1671557111284 = default1671557111284;
