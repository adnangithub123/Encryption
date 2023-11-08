import { LightningElement , track } from 'lwc';
import processEncryption from '@salesforce/apex/EncryptionUtil.processEncryption';


export default class CryptoTest extends LightningElement {
    
    encryptionKey='';
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
      const mapOfEncryptedData = new Map([]);
      mapOfEncryptedData.set('bankRedirectUrl', this.bankRedirectUrl);
      mapOfEncryptedData.set("tokenId", this.tokenId);
      mapOfEncryptedData.set("bankCode", this.bankCode);
      mapOfEncryptedData.set("availableBalance", this.availableBalance);
      mapOfEncryptedData.set("creditSegmentCode", this.creditSegmentCode);
      mapOfEncryptedData.set("creditSegmentType", this.creditSegmentType);
      mapOfEncryptedData.set("applicationID", this.applicationID);
      mapOfEncryptedData.set("companyCode", this.companyCode);
      mapOfEncryptedData.set("amount", this.amount);
      mapOfEncryptedData.set("userId", this.userId);
      console.log('in the callback  ' + [...mapOfEncryptedData.entries()]);
      console.log([...mapOfEncryptedData.keys()]);
      console.log([...mapOfEncryptedData.values()]);
      //mapOfEncryptedData

      processEncryption({ encryptedDataArray: mapOfEncryptedData }) 
      .then((result) => {
        this.encryptionKey = JSON.stringify(result);
        console.log('in success 1 s== '+JSON.stringify(result));
        this.contacts = result;
      })
      .catch((error) => {
        console.log('in error == '+JSON.stringify(error));
        this.error = error;
      });
    }
}