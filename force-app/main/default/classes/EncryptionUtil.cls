public with sharing class EncryptionUtil {
    public static Blob cryptoKey;
    //public static Map<Id,String> encryptKey = new Map<Id,String>();
    public static string expMsg; 

    public static String getKey(){ 
        cryptoKey = Crypto.generateAesKey(128); 
        return EncodingUtil.base64Encode(cryptoKey);
    }

    public static void processEncryption(List<string> encryptedDataArray, string key){ 
    //public static void processEncryption(string rec, string name){ 
        
        Map<string, string> mapOfKeyAndData = new map<string, string>();
        system.debug('cryptoKey -- '+EncodingUtil.base64Encode(cryptoKey));
        for(string s : encryptedDataArray){
            system.debug('s == '+s);
            //encryptKey.put(recId, EncodingUtil.base64Encode(cryptoKey)); 
            Blob data = Blob.valueOf(s); 
            Blob encryptedData = Crypto.encryptWithManagedIV('AES128', getKey(), data ); 
            string b64Data = EncodingUtil.base64Encode (encryptedData);  
           
            
            mapOfKeyAndData.put(EncodingUtil.base64Encode(cryptoKey),b64Data);
            system.debug('mapOfKeyAndData == '+mapOfKeyAndData); */
        }
        
        //return mapOfKeyAndData; 
    } 

    public static String processDecryption(string encryptedData, String key){ 

        String decryptedData; 
        Blob data = EncodingUtil.base64Decode (encryptedData); 
        
        Blob privateKey = EncodingUtil.base64Decode(key);  
        try{ 
            Blob dataToDecrypt = Crypto.decryptWithManagedIV ('AES128', privateKey, data); 
            decryptedData = dataToDecrypt.toString(); 
            system.debug('decryptedData -- '+decryptedData);
        }
        catch(Exception e){ 
           expMsg = e.getMessage();  
        }
        return (string.isEmpty(expMsg) ?  decryptedData :  null);  
    } 
}