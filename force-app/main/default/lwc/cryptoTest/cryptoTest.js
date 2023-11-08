import { LightningElement, wire } from 'lwc';
import fetchData from '@salesforce/apex/EncryptionUtil.processEncryption';


export default class CryptoTest extends LightningElement {
    bankRedirectUrl = 'test.salesforce.com';
    tokenId='dkjnaskdn2882992sdx';
    bankCode = 'Abl';
    availableBalance='109';
    creditSegmentCode = 'test';
    creditSegmentType='TESTS';
    applicationID='567896782';
    companyCode='090';
    amount='200';
    userId='23dsfaew231plo0';
    encryptedDataArray = [];

    connectedCallback(){
        this.encryptData();        
    }
    
    encryptData(){
        let mapOfEncryptedData = new Map();
        mapOfEncryptedData.set("bankRedirectUrl", this.bankRedirectUrl);
        mapOfEncryptedData.set("tokenId", this.tokenId);
        mapOfEncryptedData.set("bankCode", this.bankCode);
        mapOfEncryptedData.set("availableBalance", this.availableBalance);
        mapOfEncryptedData.set("creditSegmentCode", this.creditSegmentCode);
        mapOfEncryptedData.set("creditSegmentType", this.creditSegmentType);
        mapOfEncryptedData.set("applicationID", this.applicationID);
        mapOfEncryptedData.set("companyCode", this.companyCode);
        mapOfEncryptedData.set("amount", this.amount);
        mapOfEncryptedData.set("userId", this.userId);

        /*
        this.encryptedDataArray.push(bankRedirectUrl);
        this.encryptedDataArray.push(tokenId);
        this.encryptedDataArray.push(bankCode);
        this.encryptedDataArray.push(availableBalance);
        this.encryptedDataArray.push(creditSegmentCode);
        this.encryptedDataArray.push(creditSegmentType);
        this.encryptedDataArray.push(applicationID);
        this.encryptedDataArray.push(companyCode);
        this.encryptedDataArray.push(amount);
        this.encryptedDataArray.push(userId);
        */

        
      processEncryption(this.mapOfEncryptedData)
      .then((result) => {
        this.contacts = result;
      })
      .catch((error) => {
        this.error = error;
      });
    }
}