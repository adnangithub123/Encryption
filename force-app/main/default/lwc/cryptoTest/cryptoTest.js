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

        
    processEncryption(this.encryptedDataArray)
      .then((result) => {
        this.contacts = result;
      })
      .catch((error) => {
        this.error = error;
      });
    }
}